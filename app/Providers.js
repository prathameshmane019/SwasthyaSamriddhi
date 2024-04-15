"use client";
import { NextUIProvider } from "@nextui-org/system";
import { SessionProvider } from "next-auth/react";
import { StoreProviders } from "./redux/provider";

import { Toaster } from 'sonner'
import { ThemeProvider } from "next-themes";
export const AuthProvider = ({ children }) => {
  return (<SessionProvider><StoreProviders>
    <NextUIProvider>
    <ThemeProvider attribute="class" defaultTheme="dark">{children}
    </ThemeProvider></NextUIProvider></StoreProviders>
    <Toaster richColors /></SessionProvider>)
};
