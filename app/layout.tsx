import "./globals.css";
import Navbar from "@/components/navbar";
import MobileFooter from "@/components/MobileFooter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "FiPet", template: "%s - FiPet" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <MobileFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
