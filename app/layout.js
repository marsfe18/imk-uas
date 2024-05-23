import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React from 'react';
import Appbar from "../components/appbar"

export const metadata = {
  title: "Kementrian Pertanian",
  description:
    "Kementrian Pertanian is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://pertanian.go.id"),
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <Appbar />
        {children}
      </body>
    </html>
  );
}