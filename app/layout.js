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
      <body className={inter.className}>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
