import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MMMeadBot Admin Dashboard",
  description:
    "Dashbord for genrating new commands for the MMMead Discord bot and editing existing commands.",
  icons: {
    icon: [{ url: "/MMMeadBot.png", href: "/MMMeadBot.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <ClerkProvider>
        <body className={inter.className}>
          <Navbar />
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
