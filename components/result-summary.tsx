"use client";

import Image from "next/image";
import type { PersonalityResult } from "@/lib/types";

interface ResultSummaryProps {
  personality: PersonalityResult;
}

const handleClick = () => {
  window.location.href = "/"; // Go back to topic selection
}

export function ResultSummary({ personality }: ResultSummaryProps) {
  return (
    <Image
      alt={""}
      fill
      onClick={handleClick}
      src={`/ending/${personality.topicId}/${personality.groupId}${personality.variantId}.png`}
    />
  );
}
