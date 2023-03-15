import React, { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}
const Layout = ({children}:LayoutProps) => {
  return (
    <main className="flex flex-col h-screen antialiased">
        {children}
    </main>
  )
}

export default Layout

