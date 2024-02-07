import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>
        <main >
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
