// app/layout.tsx
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Chat from "./components/Chat";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Global metadata configuration
export const metadata: Metadata = {
  title: "Aqua Corps",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Here you render children which represent page content */}
        {children}
        <Chat />
      </body>
    </html>
  );
}
