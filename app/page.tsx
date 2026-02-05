"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CLOUDFLARE_R2_URL = "https://oat-project-img.sirasith.net";

export default function Home() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    // รวม URL ของทุก Artboard ที่ต้องใช้ในหน้านี้
    const imagesToPreload = [
      `${CLOUDFLARE_R2_URL}/opening/Artboard1.png`,
      `${CLOUDFLARE_R2_URL}/opening/Artboard2.png`,
      `${CLOUDFLARE_R2_URL}/opening/Artboard3.png`,
      `${CLOUDFLARE_R2_URL}/opening/Artboard4.png`,
      `${CLOUDFLARE_R2_URL}/opening/Artboard5.png`,
    ];

    for (const url of imagesToPreload) {
      const img = new window.Image();
      img.src = url;
    }

    console.log("All opening images preloaded!");
  }, []); // [] ว่างๆ คือทำครั้งเดียวตอนโหลดหน้าเว็บ

  const handleBack = () => {
    if (step > 1) {
      setStep(() => step - 1);
    }
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const getCurrentImage = () => {
    switch (step) {
      case 1:
        return `${CLOUDFLARE_R2_URL}/opening/Artboard1.png`;
      case 2:
        return `${CLOUDFLARE_R2_URL}/opening/Artboard2.png`;
      case 3:
        return `${CLOUDFLARE_R2_URL}/opening/Artboard3.png`;
      case 4:
        return `${CLOUDFLARE_R2_URL}/opening/Artboard4.png`;
      case 5:
        return `${CLOUDFLARE_R2_URL}/opening/Artboard5.png`;
      default:
        return `${CLOUDFLARE_R2_URL}/opening/Artboard1.png`;
    }
  };

  return (
    <main className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Background Atmosphere"
          className="scale-110 object-cover blur-2xl brightness-[0.4]"
          fill
          priority
          src={getCurrentImage()}
          unoptimized={true}
        />
      </div>

      <div
        className="relative z-10 shadow-2xl"
        style={{
          aspectRatio: "9/16",
          height: "min(100dvh, 100vw * 16 / 9)",
          width: "min(100vw, 100dvh * 9 / 16)",
        }}
      >
        {step > 1 && (
          <Button
            className="absolute top-4 left-4 z-50 rounded-full bg-black/20 text-white hover:bg-black/40"
            onClick={handleBack}
            size="icon"
            variant="ghost"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
        )}
        <div className="absolute inset-0">
          <Image
            alt="Main Content"
            className="animate-fade object-cover transition-all"
            fill
            key={getCurrentImage()}
            priority
            src={getCurrentImage()}
            unoptimized={true}
          />
        </div>

        <div className="absolute inset-0 h-full w-full">
          {step === 1 && (
            <button
              className="absolute bottom-[14%] left-1/2 h-[10%] w-[60%] -translate-x-1/2 cursor-pointer rounded-full bg-red-500 opacity-0"
              onClick={nextStep}
              type="button"
            />
          )}

          {step >= 2 && step <= 4 && (
            <button
              className="absolute inset-0 h-full w-full cursor-pointer"
              onClick={nextStep}
              type="button"
            />
          )}

          {step === 5 && (
            <>
              <Link
                className="absolute top-[32%] left-1/2 h-[10%] w-[70%] -translate-x-1/2 cursor-pointer rounded-full bg-blue-500 opacity-0"
                href="quiz?topicId=love"
              />
              <Link
                className="absolute top-[46%] left-1/2 h-[10%] w-[70%] -translate-x-1/2 cursor-pointer rounded-full bg-blue-500 opacity-0"
                href="quiz?topicId=work"
              />
              <Link
                className="absolute top-[60%] left-1/2 h-[10%] w-[70%] -translate-x-1/2 cursor-pointer rounded-full bg-blue-500 opacity-0"
                href="quiz?topicId=health"
              />
              <Link
                className="absolute top-[74%] left-1/2 h-[10%] w-[70%] -translate-x-1/2 cursor-pointer rounded-full bg-blue-500 opacity-0"
                href="quiz?topicId=finance"
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
