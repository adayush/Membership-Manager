import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import SessionProvider from "./components/Provider";
import config from "@/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: config.app_title,
  description: config.description,
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content={config.app_title} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={config.app_title} />
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

        <meta name="twitter:card" content={config.description} />
        <meta name="twitter:url" content={config.url} />
        <meta name="twitter:title" content={config.app_title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:image" content={`${config.url}/icons/android-chrome-192x192.png`} />
        <meta name="twitter:creator" content="@ayush_dhingra_" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.app_title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:site_name" content={config.app_title} />
        <meta property="og:url" content={config.url} />
        <meta property="og:image" content={`${config.url}/icons/apple-touch-icon.png`} />

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
