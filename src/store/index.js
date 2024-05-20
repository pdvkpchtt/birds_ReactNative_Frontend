import { configureStore } from "@reduxjs/toolkit";

import { profileSlice } from "./profileSlice";
import { favoriteSlice } from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});
