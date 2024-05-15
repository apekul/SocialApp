import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNewAccessToken } from "../../../utils/refreshToken";

export const fetchPostdata = createAsyncThunk(
  "postsRoute/fetchPostdata",
  async (_, { dispatch, getState }) => {
    try {
      // fetchData with accessToken
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        await dispatch(refreshToken()); // Dispatch token refresh action
      }
      // Retrieve the access token again after potential refresh
      const updatedAccessToken = localStorage.getItem("accessToken");
      // If there's still no access token after attempted refresh, throw an error
      if (!updatedAccessToken) {
        throw new Error("Failed to obtain a valid access token");
      }
      // Fetch data using the access token
      const response = await fetch("http://localhost:3000/post/allPosts", {
        headers: {
          Authorization: updatedAccessToken,
        },
      });

      if (response.ok) {
        // if response is ok then return data
        const data = await response.json();
        return data;
      } else if (response.status === 401) {
        // if error is 401 then refreshToken
        const res = await dispatch(refreshToken());
        // if token refresh success then run fetchPostdata again
        if (res.payload.success) {
          // Retry the fetchPostdata action immediately after successful token refresh
          return dispatch(fetchPostdata());
        } else {
          // if refreshToken is not success then throw error
          throw new Error("Failed to refresh access token");
        }
        // if response.ok is error then trhow error
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      throw new Error("Failed to refresh access token");
    }
  }
);

// Thunk for refreshing the access token
export const refreshToken = createAsyncThunk(
  "postsRoute/refreshToken",
  async (_, { dispatch }) => {
    try {
      await getNewAccessToken(); // Dispatch action to refresh token
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }
);

export const dataSlice = createSlice({
  name: "postsRoute",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostdata.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPostdata.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload.payload || action.payload;
        state.error = null;
      })
      .addCase(fetchPostdata.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const postRouteReducer = dataSlice.reducer;
