"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { openings } from "@/lib/opening";

const playClickSound = () => {
  const audio = new Audio("/click.mp3");
  audio.volume = 0.5;
  const playPromise = audio.play();
  if (playPromise) {
    playPromise.catch((error) => {
      console.warn("Opening page sound effect playback failed", error);
    });
  }
};

export default function Home() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    for (const url of openings) {
      const img = new window.Image();
      img.src = url;
    }
  }, []);

  const handleBack = () => {
    if (step > 1) {
      setStep(() => step - 1);
    }
  };

  const nextStep = () => {
    if (step < openings.length) {
      setStep(step + 1);
    }
    if (step === 1) {
      window.dispatchEvent(new Event("start-background-music"));
    }
  };

  const currentImage = openings[step - 1] || openings[0];

  return (
    <main className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Background Atmosphere"
          className="scale-110 object-cover blur-2xl brightness-[0.4]"
          fill
          priority
          src={currentImage}
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
            className="absolute top-4 left-4 z-50 rounded-full bg-black text-white hover:bg-black/40"
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
            key={currentImage}
            priority
            src={currentImage}
            unoptimized={true}
          />
        </div>

        <div className="absolute inset-0 h-full w-full">
          {step === 1 && (
            <button
              // className="absolute bottom-[14%] left-1/2 h-[10%] w-[60%] -translate-x-1/2 cursor-pointer rounded-full bg-red-500 opacity-10"
              className="absolute inset-0 h-full w-full cursor-pointer bg-red-500 opacity-10"
              onClick={() => {
                playClickSound();
                nextStep();
              }}
              type="button"
            />
          )}

          {step === 2 && (
            <button
              className="absolute bottom-[14%] left-1/2 h-[10%] w-[60%] -translate-x-1/2 cursor-pointer rounded-full bg-red-500 opacity-0"
              onClick={() => {
                playClickSound();
                nextStep();
              }}
              type="button"
            />
          )}

          {step >= 3 && step <= 5 && (
            <button
              className="absolute inset-0 h-full w-full cursor-pointer bg-red-200/0 opacity-0"
              onClick={() => {
                playClickSound();
                nextStep();
              }}
              type="button"
            />
          )}

          {step === 6 && (
            <>
              <Link
                className="absolute top-[32%] left-1/2 h-[10%] w-[70%] -translate-x-1/2 cursor-pointer rounded-full bg-blue-500 opacity-0"
                href="quiz?topicId=love"
                onClick={playClickSound}
              />
              <Link
                className="absolute top-[46%] left-1/2 h-[10%] w-[70%] -translate-x-1/2 cursor-pointer rounded-full bg-blue-500 opacity-0"
                href="quiz?topicId=work"
                onClick={playClickSound}
              />
              <Link
                className="absolute top-[60%] left-1/2 h-[10%] w-[70%] -translate-x-1/2 cursor-pointer rounded-full bg-blue-500 opacity-0"
                href="quiz?topicId=health"
                onClick={playClickSound}
              />
              <Link
                className="absolute top-[74%] left-1/2 h-[10%] w-[70%] -translate-x-1/2 cursor-pointer rounded-full bg-blue-500 opacity-0"
                href="quiz?topicId=finance"
                onClick={playClickSound}
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
