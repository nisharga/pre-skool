import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api-slice";

// import your existing reducers
import sidebarSlice from "../core/data/redux/sidebarSlice";
import themeSettingSlice from "../core/data/redux/themeSettingSlice";
// add more slices...

export const store = configureStore({
  reducer: {
    // your old reducers
    sidebarSlice: sidebarSlice,   // ← you MUST add this back
    themeSetting: themeSettingSlice,

    // rtk query reducer
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

