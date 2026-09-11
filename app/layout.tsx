"use client";

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Straight Outta Wall Street</title>
        <meta
          name="description"
          content="M&A advisory, strategic finance, live deal support, and elite financial training for business owners and finance professionals."
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
