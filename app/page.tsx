"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const getCurrentImage = () => {
    switch (step) {
      case 1: return "/opening/Artboard1.png";
      case 2: return "/opening/Artboard2.png";
      case 3: return "/opening/Artboard3.png";
      case 4: return "/opening/Artboard4.png";
      case 5: return "/opening/Artboard5.png";
      default: return "/opening/Artboard1.png";
    }
  };

  return (
    <main className="relative flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 z-0">
        <Image
          src={getCurrentImage()}
          alt="Background Atmosphere"
          fill
          className="object-cover blur-2xl brightness-[0.4] scale-110"
          priority
        />
      </div>

      <div 
        className="relative z-10 shadow-2xl"
        style={{
          aspectRatio: '9/16',
          height: 'min(100dvh, 100vw * 16 / 9)',
          width: 'min(100vw, 100dvh * 9 / 16)'
        }}
      >
        <div className="absolute inset-0">
            <Image src={getCurrentImage()} alt="Main Content" fill className="object-cover" priority />
        </div>
        
        <div className="absolute inset-0 w-full h-full">
            {step === 1 && (
            <button
                onClick={nextStep}
                className="absolute bottom-[14%] left-1/2 h-[10%] w-[60%] -translate-x-1/2 rounded-full cursor-pointer opacity-0 bg-red-500" 
            />
            )}

            {step >= 2 && step <= 4 && (
            <button
                onClick={nextStep}
                className="absolute inset-0 w-full h-full cursor-pointer"
            />
            )}

            {step === 5 && (
            <>
                <Link href="quiz?topicId=love" className="absolute left-1/2 top-[32%] h-[10%] w-[70%] -translate-x-1/2 rounded-full cursor-pointer opacity-0 bg-blue-500" />
                <Link href="quiz?topicId=work" className="absolute left-1/2 top-[46%] h-[10%] w-[70%] -translate-x-1/2 rounded-full cursor-pointer opacity-0 bg-blue-500" />
                <Link href="quiz?topicId=health" className="absolute left-1/2 top-[60%] h-[10%] w-[70%] -translate-x-1/2 rounded-full cursor-pointer opacity-0 bg-blue-500" />
                <Link href="quiz?topicId=finance" className="absolute left-1/2 top-[74%] h-[10%] w-[70%] -translate-x-1/2 rounded-full cursor-pointer opacity-0 bg-blue-500" />
            </>
            )}
        </div>
      </div>
    </main>
  );
}