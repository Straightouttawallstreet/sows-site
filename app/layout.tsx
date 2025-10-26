"use client";
import "./globals.css";
import { useEffect } from "react";
import posthog from "posthog-js";

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
      <body>{children}</body>
    </html>
  );
}
