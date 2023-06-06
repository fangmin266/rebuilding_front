import React, { ReactNode } from "react";
import useStartAutoLogin from "../hooks/useStartAutoLogin";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  useStartAutoLogin();

  return <main className="flex flex-col h-screen antialiased">{children}</main>;
};

export default Layout;
