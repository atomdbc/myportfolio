import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // This imports the black background settings

// We configure the font to use a CSS variable, matching your tailwind.config.ts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samuel Lemikan | AI & Full-Stack Engineer",
  description: "Portfolio of a Senior Software Engineer specializing in AI, Systems, and Scalability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}