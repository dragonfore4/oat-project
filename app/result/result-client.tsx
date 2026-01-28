"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { PersonalityResult } from "@/lib/types";

interface ResultClientProps {
  personality: PersonalityResult;
}
const CLOUDFLARE_R2_URL = "https://oat-project-img.sirasith.net";

export function ResultClient({ personality }: ResultClientProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/"); // Go back to topic selection
  };

  return (
    <div className="relative flex max-h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Background Effect"
          className="scale-110 object-cover blur-2xl brightness-[0.4]"
          fill
          priority
          src={`${CLOUDFLARE_R2_URL}/ending/${personality.topicId}/${personality.groupId}${personality.variantId}.png`}
          unoptimized={true}
        />
      </div>

      <div
        className="relative z-10 overflow-hidden shadow-2xl"
        style={{
          aspectRatio: "9/16",
          height: "min(100dvh, 100vw * 16 / 9)",
          width: "min(100vw, 100dvh * 9 / 16)",
        }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            alt="Question Content"
            className="cursor-pointer object-cover"
            fill
            onClick={handleClick}
            priority
            src={`${CLOUDFLARE_R2_URL}/ending/${personality.topicId}/${personality.groupId}${personality.variantId}.png`}
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  );
}
