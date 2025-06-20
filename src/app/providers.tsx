"use client"

interface AuthProviderProps{
    children:React.ReactNode,
}

import { SessionProvider } from "next-auth/react"

export const AuthProvider = ({children}:AuthProviderProps) => {
    return (
        <SessionProvider>{children}</SessionProvider>
        )
}