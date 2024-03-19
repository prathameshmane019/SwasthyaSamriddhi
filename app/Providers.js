"use client";
import { NextUIProvider } from "@nextui-org/system";
import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children }) => {
  return (<SessionProvider>
    <NextUIProvider>{children}</NextUIProvider></SessionProvider>)
};
