"use client";
import { NextUIProvider } from "@nextui-org/system";
import { SessionProvider } from "next-auth/react";
import { StoreProviders } from "./redux/provider";
import { Toaster } from 'sonner'
export const AuthProvider = ({ children }) => {
  return (<SessionProvider><StoreProviders>
    <NextUIProvider>{children}</NextUIProvider></StoreProviders>
    <Toaster richColors /></SessionProvider>)
};
