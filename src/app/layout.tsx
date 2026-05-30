import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carolina Workflow",
  description:
    "Helping Carolina businesses spend less time on administrative work.",
  openGraph: {
    title: "Carolina Workflow",
    description:
      "Helping Carolina businesses spend less time on administrative work.",
    url: "https://carolinaworkflow.com",
    siteName: "Carolina Workflow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}