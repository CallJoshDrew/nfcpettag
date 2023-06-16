"use client";

import "./globals.css";
import Navbar from "./components/navbar.jsx";
import { ThemeProvider, CssBaseline } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>NFC Pet Tag</title>
        <meta name="description" content="NFC PET TAG" />
        <link rel="icon" href="/favicon.ico" />
      </head>
        <CssBaseline />
        <body><Navbar />{children}</body>
    </html>
  );
}