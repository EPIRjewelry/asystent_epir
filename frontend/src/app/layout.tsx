import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EPIR Art Jewellery - Analytics Dashboard",
  description: "Multi-Agent E-commerce Analytics Application for EPIR Art Jewellery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
