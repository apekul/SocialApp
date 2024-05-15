import { configureStore } from "@reduxjs/toolkit";
import { postRouteReducer } from "./thunks/postRoute";

export const store = configureStore({
  reducer: {
    postsRoute: postRouteReducer,
  },
});
