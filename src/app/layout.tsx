import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import React from "react";
import StoreProvider from "@/app/StoreProvider";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swapper",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
