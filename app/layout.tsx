import Navbar from "@/components/navbar";
import MobileFooter from "@/components/MobileFooter";
import { Analytics } from "@vercel/analytics/react";

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
      </body>
    </html>
  );
}
