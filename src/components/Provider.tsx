"use client"
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export interface ChildProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ChildProps) => {
    const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Provider;
