import Image from "next/image";
import type { PersonalityResult } from "@/lib/types";

interface ResultSummaryProps {
  personality: PersonalityResult;
  onRestart: () => void;
}

export function ResultSummary({ personality, onRestart }: ResultSummaryProps) {
  return (
    <Image
      alt={""}
      fill
      src={`/ending/${personality.topicId}/${personality.groupId}${personality.variantId}.png`}
    />
  );
}
