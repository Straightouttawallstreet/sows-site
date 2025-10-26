"use client";
import "./globals.css";
import { useEffect } from "react";
import posthog from "posthog-js";
import Image from "next/image";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (key) {
      posthog.init(key, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Straight Outta Wall Street</title>
        <meta
          name="description"
          content="On-demand modeling, deal coaching & interview mastery."
        />
      </head>
      <body className="bg-white text-black">
        {/* Navbar with logo */}
        <nav className="flex items-center justify-between px-6 py-4 bg-black">
          <div className="flex items-center">
            <Image
              src="/sows-logo.png"
              alt="Straight Outta Wall Street"
              width={160}   // adjust width
              height={50}   // adjust height
              className="h-8 w-auto"
            />
          </div>
        </nav>

        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
