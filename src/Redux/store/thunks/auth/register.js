import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "auth/register",
  async ({ name, lastname, email, password }) => {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastname,
          email,
          password,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to register");
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  }
);

// Define a slice for authentication state
const authSlice = createSlice({
  name: "register",
  initialState: {
    message: "",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const registerReducer = authSlice.reducer;
