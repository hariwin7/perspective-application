import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire me as a full frontend developer",
  description: "Application to perspective as frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
