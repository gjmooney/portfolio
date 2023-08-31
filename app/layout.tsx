import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Transition from "@/components/animations/TransitionEffect";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

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
      <body className="flex min-h-screen w-full flex-col bg-secondary">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="container flex-auto">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
