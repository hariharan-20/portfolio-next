import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hariharan | Front-End Engineer",
  description: "Portfolio of Hariharan, a Front-End Engineer initializing in building high-performance, scalable React applications.",
  keywords: ["Front-End Engineer", "React Developer", "Next.js", "Portfolio", "Hariharan"],
  authors: [{ name: "Hariharan" }],
  openGraph: {
    title: "Hariharan | Front-End Engineer",
    description: "I build high-performance, scalable React applications.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { CommandPalette } from "@/components/command-palette";
import { DebugConsole } from "@/components/debug-console";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CommandPalette />
          <DebugConsole />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
