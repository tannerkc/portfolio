import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanner Cottle",
  description: "Senior Software Engineer, Freelance Web Developer, Branding Consultant, Professional Bartender, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
