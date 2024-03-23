"use client";
import { NextUIProvider } from "@nextui-org/system";
import { SessionProvider } from "next-auth/react";
import { StoreProviders } from "./redux/provider";
export const AuthProvider = ({ children }) => {
  return (<SessionProvider><StoreProviders>
    <NextUIProvider>{children}</NextUIProvider></StoreProviders></SessionProvider>)
};
