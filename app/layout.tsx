import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans_Thai({
  weight: ["400", "700"],
  subsets: ["thai"],
});

// ดึง Base URL จาก Environment Variable (แนะนำ)
const PROJECT_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://oat-project.sirasith.net";
const CLOUDFLARE_R2_URL = "https://oat-project-img.sirasith.net";

export const metadata: Metadata = {
  metadataBase: new URL(PROJECT_URL),
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
        url: `${CLOUDFLARE_R2_URL}/opening/Artboard1.png`, // จะถูกนำไปต่อท้าย metadataBase อัตโนมัติ
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
    images: [`${CLOUDFLARE_R2_URL}/opening/Artboard1.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${ibmPlexSans.className} antialiased`}>{children}</body>
    </html>
  );
}
