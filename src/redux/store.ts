import { configureStore } from "@reduxjs/toolkit";
import { wordSlice } from "./states";

export const store = configureStore({
  reducer: {
    words: wordSlice.reducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
