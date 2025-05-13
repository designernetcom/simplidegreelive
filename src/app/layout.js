"use client";
import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./globals.css";
import "./styles/8b2861424f796947.css";
import "./styles/cc66cf431efece60.css";
import "./styles/bootstrap.min.css";
import "./styles/style.css";
import "./styles/bcdb44b6ad772c90.css";
import "./styles/3a6b4218bb14b3ef.css";
import "./styles/7620326e339f446b.css";
import "./styles/e881ba373a433cf6.css";
import FirstVisitModal from "../../components/FirstVisitModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Simpli degree",
//   description:
//     "SimpliDegree is an innovative online learning platform that provides industry-relevant certification and degree programs in collaboration with top universities",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    // Dynamically import Bootstrap JS on the client side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <FirstVisitModal/>
        {children}
      </body>
    </html>
  );
}
