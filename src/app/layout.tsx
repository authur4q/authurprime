import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./providers";
import Navbar from "./components/navbar";


export const metadata: Metadata = {
  title: "Prime",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <AuthProvider>
          <Navbar></Navbar>

          {children}
        </AuthProvider>
        
      </body>
    </html>
  );
}
