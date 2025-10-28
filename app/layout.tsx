"use client";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang="en">
      <head>
        <title>Straight Outta Wall Street</title>
        <meta
          name="description"
          content="On-demand modeling, deal coaching & interview mastery."
        />
      </head>
      <body>{children}<Analytics /></body>
    </html>
  );
}
