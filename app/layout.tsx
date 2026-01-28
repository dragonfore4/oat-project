import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans_Thai({
  weight: ["400", "700"],
  subsets: ["thai"],
});

// ดึง Base URL จาก Environment Variable (แนะนำ)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://oat-project.sirasith.net";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "cardcantdecide4you",
    template: "%s | cardcantdecide4you",
  },
  description: "คำอธิบายเว็บไซต์เบื้องต้น",
  openGraph: {
    title: "cardcantdecide4you",
    description: "คำอธิบายสำหรับการแชร์ลงโซเชียล",
    url: "./", // ใช้ path ปัจจุบัน
    siteName: "ชื่อเว็บไซต์ของคุณ",
    images: [
      {
        url: "https://pub-89a7d3afd9574669a02c5f4fce069c51.r2.dev/opening/Artboard1.png", // จะถูกนำไปต่อท้าย metadataBase อัตโนมัติ
        width: 1200,
        height: 630,
        alt: "Preview ของเว็บไซต์",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ชื่อเว็บไซต์ของคุณ",
    description: "คำอธิบายสำหรับการแชร์ลง X",
    images: ["https://pub-89a7d3afd9574669a02c5f4fce069c51.r2.dev/opening/Artboard1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${ibmPlexSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}