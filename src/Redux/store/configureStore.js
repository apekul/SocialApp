import { configureStore } from "@reduxjs/toolkit";
import { sampleRouteReducer } from "./thunks/sampleRoute";
import { postRouteReducer } from "./thunks/postRoute";

export const store = configureStore({
  reducer: {
    sampleRoute: sampleRouteReducer,
    postsRoute: postRouteReducer,
  },
});
