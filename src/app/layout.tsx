import { Metadata } from "next";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BootstrapJs from "../core/common/bootstrap-js/bootstrapjs";
import "../style/icon/boxicons/boxicons/css/boxicons.min.css";
import "../style/icon/weather/weathericons.css";
import "../style/icon/typicons/typicons.css";
import "../style/icon/fontawesome/css/fontawesome.min.css";
import "../style/icon/fontawesome/css/all.min.css";
import "../style/icon/ionic/ionicons.css";
import "../style/icon/tabler-icons/webfont/tabler-icons.css";
import "../style/css/feather.css";
import "../app/globals.scss";
import "../../node_modules/react-perfect-scrollbar/dist/css/styles.css"
import { ReduxProvider } from "@/core/data/redux/providers";


// ✅ Global meta tags
export const metadata: Metadata = {
  title: "Preskool Admin Template",
    icons: {
    icon: "favicon.png",
    shortcut: "favicon.png", // Add shortcut icon for better support
    apple: "favicon.png", // Optional: for Apple devices (place in `public/`)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
        <BootstrapJs />
      </body>
    </html>
  );
}
