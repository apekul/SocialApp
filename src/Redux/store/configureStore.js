import { configureStore } from "@reduxjs/toolkit";
import { getPostsRouteReducer } from "./thunks/getPostsRoute";
import { loginReducer } from "./thunks/auth/login";
import { registerReducer } from "./thunks/auth/register";

export const store = configureStore({
  reducer: {
    allPosts: getPostsRouteReducer,
    login: loginReducer,
    register: registerReducer,
  },
});
