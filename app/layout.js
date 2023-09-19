import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import SessionProvider from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Space21 Management",
  description: "Manage Space21 staff and students",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Space21 Management" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Space21 Management" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#fbd331" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="Manage Space21 staff and students" />
        <meta name="twitter:url" content="https://space21.vercel.app" />
        <meta name="twitter:title" content="Space21 Management" />
        <meta name="twitter:description" content="Manage Space21 staff and students" />
        <meta name="twitter:image" content="https://space21.vercel.app/icons/android-chrome-192x192.png" />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Space21 Management" />
        <meta property="og:description" content="Manage Space21 staff and students" />
        <meta property="og:site_name" content="Space21 Management" />
        <meta property="og:url" content="https://space21.vercel.app" />
        <meta property="og:image" content="https://space21.vercel.app/icons/apple-touch-icon.png" />

      </head>
      <body className={inter.className}>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
