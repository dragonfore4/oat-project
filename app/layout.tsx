import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import BackgroundMusic from "@/components/background-music";
import { CLOUDFLARE_R2_URL } from "@/lib/types";

const ibmPlexSans = IBM_Plex_Sans_Thai({
  weight: ["400", "700"],
  subsets: ["thai"],
});

// ดึง Base URL จาก Environment Variable
const PROJECT_URL = "https://cardcantdecide4you.com";

export const metadata: Metadata = {
  metadataBase: new URL(PROJECT_URL),
  title: {
    default: "cardcantdecide4you - แบบทดสอบบุคลิกภาพและการตัดสินใจ",
    template: "%s | cardcantdecide4you",
  },
  description:
    "ทำแบบทดสอบบุคลิกภาพเพื่อค้นหาตัวตนของคุณ ช่วยวิเคราะห์สไตล์การตัดสินใจในเรื่องการเงิน สุขภาพ ความรัก และการงาน",
  keywords: [
    "แบบทดสอบบุคลิกภาพ",
    "ทายนิสัย",
    "ค้นหาตัวตน",
    "quiz",
    "personality test",
    "personality quiz",
    "การตัดสินใจ",
    "decision maker",
    "การเงิน",
    "สุขภาพ",
    "ความรัก",
    "การงาน",
    "self-assessment",
  ],
  authors: [
    { name: "น.ส. กานต์รัตน์ วรรธนะพงษ์" },
    { name: "นาย ธนัช อินทรานุกูล" },
    { name: "น.ส. มนัสนันท์ ไชยปัญญา" },
  ],
  creator: "cardcantdecide4you",
  publisher: "cardcantdecide4you Team",
  category: "Lifestyle",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  alternates: {
    canonical: PROJECT_URL,
    languages: {
      "th-TH": PROJECT_URL,
    },
  },
  icons: {
    icon: `${CLOUDFLARE_R2_URL}/favicon.ico`,
    apple: `${CLOUDFLARE_R2_URL}/apple-touch-icon.png`,
  },
  openGraph: {
    title: "cardcantdecide4you - แบบทดสอบค้นหาบุคลิกภาพของคุณ",
    description:
      "คุณมีสไตล์การตัดสินใจแบบไหน? ร่วมทำแบบทดสอบบุคลิกภาพที่จะช่วยให้คุณเข้าใจตัวเองในทุกมิติของชีวิต ทั้งการเงิน การงาน และความรัก",
    url: PROJECT_URL,
    siteName: "cardcantdecide4you",
    images: [
      {
        url: `${CLOUDFLARE_R2_URL}/opening/Artboard1.png`,
        width: 1200,
        height: 630,
        alt: "cardcantdecide4you - แบบทดสอบบุคลิกภาพ",
        type: "image/png",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cardcantdecide4you - แบบทดสอบค้นหาบุคลิกภาพของคุณ",
    description:
      "คุณมีสไตล์การตัดสินใจแบบไหน? ร่วมทำแบบทดสอบเพื่อค้นหาตัวตนและเข้าใจตัวเองให้มากขึ้น",
    images: [`${CLOUDFLARE_R2_URL}/opening/Artboard1.png`],
    creator: "@cardcantdecide4you",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "cardcantdecide4you",
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
        <BackgroundMusic />
        {children}
      </body>
    </html>
  );
}
