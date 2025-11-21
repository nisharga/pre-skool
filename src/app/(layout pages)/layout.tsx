"use client";
import Header from "@/core/common/header";
import Sidebar from "@/core/common/sidebar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function ThemeLayouts({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname(); // Get the current pathname

    useEffect(() => {
        const htmlElement = document.documentElement;
        const body = document.body;

        // Log for debugging
        console.log("Current Pathname:", pathname);

        // Clear all data-* attributes from html element
        const attrsToClear = [
            "data-card",
            "data-sidebar",
            "data-topbar",
            "data-topbarcolor",
            "data-color",
            "data-loader",
            "data-size",
            "data-layout",
            "data-theme"
        ];
        attrsToClear.forEach((attr) => htmlElement.removeAttribute(attr));
        
        // Clear body data-* attributes
        body.removeAttribute("data-sidebarbg");
        body.removeAttribute("data-topbarbg");
        
        // Remove all layout-specific classes
        body.classList.remove("mini-sidebar", "layout-mode-rtl", "layout-box-mode");

        // Apply new layout based on route
        switch (pathname) {
            case "/layout-mini":
                htmlElement.setAttribute("data-layout", "mini");
                body.classList.add("mini-sidebar");
                break;

            case "/layout-rtl":
                htmlElement.setAttribute("data-layout", "rtl");
                body.classList.add("layout-mode-rtl");
                break;

            case "/layout-box":
                htmlElement.setAttribute("data-layout", "box");
                body.classList.add("layout-box-mode", "mini-sidebar");
                break;
                
            case "/layout-dark":
                htmlElement.setAttribute("data-theme", "dark");
                break;
                
            default:
                htmlElement.setAttribute("data-layout", "default");
                break;
        }
    }, [pathname]);
    return (
        <div className="main-wrapper">
            <Header />
            <Sidebar />
            {children}
        </div>
    );
}
