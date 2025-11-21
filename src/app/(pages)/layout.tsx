"use client";

import Header from "@/core/common/header";
import Sidebar from "@/core/common/sidebar";
import ThemeSettings from "@/core/common/theme-settings";
import { all_routes } from "@/router/all_routes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routes = all_routes;
  const [showLoader, setShowLoader] = useState(true);
  const mobileSidebar = useSelector(
    (state: any) => state.sidebarSlice.mobileSidebar
  );

  const expandMenu = useSelector((state: any) => state.sidebarSlice.expandMenu);

  const dataLayout = useSelector((state: any) => state.themeSetting.dataLayout);
  const dataTopBar = useSelector((state: any) => state.themeSetting.dataTopBar);
  const dataTheme = useSelector((state: any) => state.themeSetting.dataTheme);
  const dataSidebar = useSelector(
    (state: any) => state.themeSetting.dataSidebar
  );
  const dataSidebarBg = useSelector(
    (state: any) => state.themeSetting.dataSidebarBg
  );
  const dataColor = useSelector((state: any) => state.themeSetting.dataColor);
  const location = usePathname();
  useEffect(() => {
    // Mapping functions
    const layoutMap: Record<string, string> = {
      default_layout: "default",
      mini_layout: "mini",
      boxed_layout: "boxed",
      rtl: "rtl",
    };
    const sidebarMap: Record<string, string> = {
      default_data_sidebar: "light",
      dark_data_sidebar: "dark",
      primary_data_sidebar: "primary",
      darkblack_data_sidebar: "darkblack",
      darkblue_data_sidebar: "darkblue",
    };
    const sidebarBgMap: Record<string, string> = {
      default_data_sidebar_bg: "default",
      data_sidebar_1: "sidebarbg1",
      data_sidebar_2: "sidebarbg2",
      data_sidebar_3: "sidebarbg3",
      data_sidebar_4: "sidebarbg4",
      data_sidebar_5: "sidebarbg5",
      data_sidebar_6: "sidebarbg6",
    };
    const colorMap: Record<string, string> = {
      default_data_color: "primary",
      violet_data_color: "violet",
      pink_data_color: "pink",
      orange_data_color: "orange",
      green_data_color: "green",
      red_data_color: "red",
    };
    const topBarMap: Record<string, string> = {
      default_topbar_color: "white",
      dark_topbar_color: "dark",
      primary_topbar_color: "primary",
      grey_topbar_color: "grey",
    };
    const themeMap: Record<string, string> = {
      default_data_theme: "light",
      dark_data_theme: "dark",
    };

    // Set data-theme
    document.documentElement.setAttribute(
      "data-theme",
      themeMap[dataTheme] || ""
    );
    // Set data-layout
    document.documentElement.setAttribute(
      "data-layout",
      layoutMap[dataLayout] || ""
    );
    // Set data-sidebar
    document.documentElement.setAttribute(
      "data-sidebar",
      sidebarMap[dataSidebar] || ""
    );
    // Set data-sidebarbg (was data-sidebar-bg)
    document.documentElement.setAttribute(
      "data-sidebarbg",
      sidebarBgMap[dataSidebarBg] || ""
    );
    // Set data-color
    document.documentElement.setAttribute(
      "data-color",
      colorMap[dataColor] || ""
    );
    // Set data-topbar
    document.documentElement.setAttribute(
      "data-topbar",
      topBarMap[dataTopBar] || ""
    );
  }, [
    dataTheme,
    dataLayout,
    dataSidebar,
    dataSidebarBg,
    dataColor,
    dataTopBar,
  ]);
  useEffect(() => {
    if (
      location === routes.adminDashboard ||
      location === routes.teacherDashboard ||
      location === routes.studentDashboard ||
      location === routes.parentDashboard
    ) {
      // Show the loader when navigating to a new route
      setShowLoader(true);

      // Hide the loader after 2 seconds
      const timeoutId = setTimeout(() => {
        setShowLoader(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId); // Clear the timeout when component unmounts
      };
    } else {
      setShowLoader(false);
    }
    window.scrollTo(0, 0);
  }, [location]);
  // Compute theme/layout classes
  let layoutClass = "";
  if (dataLayout === "mini_layout") layoutClass = "mini-sidebar";
  else if (dataLayout === "boxed_layout") layoutClass = "layout-box-mode";
  else if (dataLayout === "rtl") layoutClass = "layout-mode-rtl";
  useEffect(() => {
    // Remove any lingering unwanted classes
    const unwanted = ["default-layout", "expand-menu"];
    unwanted.forEach((cls) => document.body.classList.remove(cls));
    let bodyClass = layoutClass;
    if (dataTheme === "dark_data_theme") {
      bodyClass += " dark-data-theme";
    }
    if (dataLayout === "mini_layout" && expandMenu) {
      bodyClass += " expand-menu";
    }
    document.body.className = bodyClass.trim();
    // Set data-sidebarbg on body as attribute (not as class)
    const sidebarBgMap: { [key: string]: string } = {
      default_data_sidebar_bg: "default-data-sidebar-bg",
      data_sidebar_1: "sidebarbg1",
      data_sidebar_2: "sidebarbg2",
      data_sidebar_3: "sidebarbg3",
      data_sidebar_4: "sidebarbg4",
      data_sidebar_5: "sidebarbg5",
      data_sidebar_6: "sidebarbg6",
    };
    document.body.setAttribute(
      "data-sidebarbg",
      sidebarBgMap[dataSidebarBg] || ""
    );
  }, [layoutClass, dataSidebarBg, dataLayout, expandMenu, dataTheme]);
  return (
    <div
      className={`main-wrapper 
        ${mobileSidebar ? "slide-nav" : ""}`}
    >
      <Header />
      <Sidebar />
      <ThemeSettings />
      {children}
    </div>
  );
}
