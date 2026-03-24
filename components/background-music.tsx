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
    audio.preload = "auto";
    audio.volume = 0.15;
    audio.muted = isMuted;

    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [isMuted]);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.muted = isMuted;
    audioRef.current.volume = 0.15;
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

    return () => {
      window.removeEventListener("start-background-music", handleStartMusic);
    };
  }, [musicStarted]);

  return (
    <Button
      aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      className="fixed top-4 right-4 z-[9999] rounded-full bg-black/20 text-white hover:bg-black/40"
      onClick={() => {
        const nextMuted = !isMuted;
        setIsMuted(nextMuted);

        if (audioRef.current) {
          audioRef.current.muted = nextMuted;
        }
      }}
      size="sm"
      variant="ghost"
    >
      {isMuted ? (
        <VolumeX className="h-5 w-5" />
      ) : (
        <Volume2 className="h-5 w-5" />
      )}
    </Button>
  );
}
