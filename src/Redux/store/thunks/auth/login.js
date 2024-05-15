import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to log in");
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define a slice for authentication state
const authSlice = createSlice({
  name: "login",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || null, // Load accessToken from localStorage
    refreshToken: localStorage.getItem("refreshToken") || null, // Load refreshToken from localStorage
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const { accessToken, refreshToken } = action.payload;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.error = null;

        // Save tokens to localStorage
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.error = action.payload;
      });
  },
});

export const loginReducer = authSlice.reducer;
