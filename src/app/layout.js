import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PATOLA | Luxury Perfumery Haute Couture",
  description: "Luxury Perfumery Haute Couture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />

    </div>
      </body>
    </html>
  );
}
