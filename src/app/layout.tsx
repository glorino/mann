import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MANN Professional Services | Accounting, Auditing & Consultancy",
  description:
    "Accurate, ethical, and professional accounting, auditing, taxation, and consultancy services. Trusted by leading organisations across Nigeria.",
  keywords: [
    "accounting",
    "auditing",
    "taxation",
    "consultancy",
    "professional services",
    "Nigeria",
    "financial advisory",
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
