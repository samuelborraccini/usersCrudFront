"use client";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Provider } from "react-redux";
import store from "@/redux";

const lato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Provider store={store}>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
