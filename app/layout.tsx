import "./globals.css";
import Navbar from "@/components/navbar";
import MobileFooter from "@/components/MobileFooter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
