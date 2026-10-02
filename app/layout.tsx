import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { MotionProvider } from "@/components/motion/reveal";
import "./globals.css";

// Static weights (not the variable font): the variable build has overlapping
// contours that show through the outlined hero headline.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stonemix — Built from the ground up",
  description:
    "Concrete engineered for the way you build. Ready-mix concrete supply and pumping since 2011.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // Browser extensions stamp their own attributes on <html>/<body> before
  // React hydrates; ignore those mismatches (this only covers these two tags).
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
