import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is a portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-background text-foreground antialiased ${inter.className}`}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className="min-h-screen w-full bg-secondary">
          <Navbar />
          <div className="container">{children}</div>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
