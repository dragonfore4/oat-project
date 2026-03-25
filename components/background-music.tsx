"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/bgm.mp3");
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const handleStartMusic = async () => {
      if (!audioRef.current || musicStarted) {
        return;
      }

      try {
        await audioRef.current.play();
        setMusicStarted(true);
      } catch (error) {
        console.warn("Audio playback was blocked", error);
      }
    };

    window.addEventListener("start-background-music", handleStartMusic);
    return () =>
      window.removeEventListener("start-background-music", handleStartMusic);
  }, [musicStarted]);

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <Button
      aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      className="absolute z-9999 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 active:scale-95"
      onClick={handleToggleMute}
      size="icon"
      style={{
        right: "calc((100vw - min(100vw, 100dvh * 9 / 16)) / 2 + 1rem)",
        top: "calc((100dvh - min(100dvh, 100vw * 16 / 9)) / 2 + 1rem)",
      }}
      variant="ghost"
    >
      {isMuted ? (
        <VolumeX className="h-6 w-6 text-black" />
      ) : (
        <Volume2 className="h-6 w-6 text-white" />
      )}
    </Button>
  );
}
