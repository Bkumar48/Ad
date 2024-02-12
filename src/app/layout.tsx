import type { Metadata } from "next";
import { Nunito_Sans, DM_Serif_Display, Oooh_Baby } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar/Navbar";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});
const dm = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm",
});
const baby = Oooh_Baby({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-baby",
});

export const metadata: Metadata = {
  title: "Adaired Digital Media",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        id="root"
        className={cn(
          "relative h-full font-sans antialiased",
          dm.variable,
          nunito.variable,
          baby.variable
        )}
      >
        <main className={`relative flex flex-col min-h-screen`}>
          <Navbar />
          <div className={`flex-grow flex-1`}>{children}</div>
        </main>
      </body>
    </html>
  );
}
