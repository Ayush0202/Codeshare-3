"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ClerkProvider>
    </RecoilRoot>
  );
}
