"use client";

import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  dataLayout: Cookies.get("dataLayout") || "default_layout",
  dataTopBar: Cookies.get("dataTopBar") || "default_topbar_color",
  dataTheme: Cookies.get("dataTheme") || "default_data_theme",
  dataSidebar: Cookies.get("dataSidebar") || "default_data_sidebar",
  dataSidebarBg:
    Cookies.get("dataSidebarBg") || "default_data_sidebar_bg",
  dataColor: Cookies.get("dataColor") || "default_data_color",
  isRtl: Cookies.get("rtl") || false,
};

const themeSettingSlice = createSlice({
  name: "themeSetting",
  initialState,
  reducers: {
    setDataLayout: (state, action) => {
      state.dataLayout = action.payload;
      Cookies.set("dataLayout", action.payload);
    },
    setTopBarColor: (state, action) => {
      state.dataTopBar = action.payload;
      Cookies.set("dataTopBar", action.payload);
    },
    setDataTheme: (state, action) => {
      state.dataTheme = action.payload;
      Cookies.set("dataTheme", action.payload);
    },
    setDataSidebar: (state, action) => {
      state.dataSidebar = action.payload;
      Cookies.set("dataSidebar", action.payload);
    },
    setDataSidebarBg: (state, action) => {
      state.dataSidebarBg = action.payload;
      Cookies.set("dataSidebarBg", action.payload);
    },
    setDataColor: (state, action) => {
      state.dataColor = action.payload;
      Cookies.set("dataColor", action.payload);
    },
    setRtl: (state, action) => {
      state.isRtl = action.payload;
      Cookies.set("rtl", action.payload);
    },
    resetAllMode: (state: any) => {
      state.dataLayout = "default_layout";
      state.dataTopBar = "default_topbar_color";
      state.dataTheme = "default_data_theme";
      state.dataSidebar = "default_data_sidebar";
      state.dataSidebarBg = "data_sidebar_default";
      state.dataColor = "default_data_color";

      Cookies.set("dataLayout", "default_layout");
      Cookies.set("dataTopBar", "default_topbar_color");
      Cookies.set("dataTheme", "default_data_theme");
      Cookies.set("dataSidebar", "default_data_sidebar");
      Cookies.set("dataSidebarBg", "default_data_sidebar_bg");
      Cookies.set("dataColor", "default_data_color");
    },
  },
});

export const {
  setDataLayout,
  resetAllMode,
  setTopBarColor,
  setDataTheme,
  setDataSidebar,
  setDataSidebarBg,
  setDataColor,
  setRtl,
} = themeSettingSlice.actions;

export default themeSettingSlice.reducer;
