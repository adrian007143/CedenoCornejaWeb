import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import NavFooter from "@/components/navigation/FooterNew";
import Container from "@/components/shared/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Cedeno Corneja CPAs Co.",
  description: "Compliance is better than Compromise",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-[100dvh] `}>
        <Header />
        <main>
          <Container className="pt-16">{children}</Container>
        </main>
        <NavFooter />
      </body>
    </html>
  );
}
