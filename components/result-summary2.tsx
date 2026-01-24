import Link from "next/link";
import { Button } from "@/components/ui/button";

import type { PersonalityResult } from "@/lib/types";

interface ResultSummaryProps {
  personality: PersonalityResult;
  onRestart: () => void;
}

export function ResultSummary({ personality, onRestart }: ResultSummaryProps) {
  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-xl md:p-12">
      <h1 className="mb-2 font-bold text-3xl text-gray-800">ผลลัพธ์ของคุณคือ</h1>
      <div className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-600 text-sm">
        Group {personality.groupId}
      </div>
      <h2 className="mb-6 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text font-extrabold text-4xl text-blue-600 md:text-5xl">
        {personality.name}
      </h2>

      <p className="mb-8 text-gray-600 text-xl leading-relaxed">
        {personality.description}
      </p>

      <div className="mb-10">
        <h3 className="mb-4 font-semibold text-gray-700 text-lg">จุดเด่นของคุณ</h3>
        <div className="flex flex-wrap justify-center gap-3">
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Button className="w-full sm:w-auto" onClick={onRestart} size="lg">
          ทำแบบทดสอบอีกครั้ง
        </Button>
        <Link href="/" passHref>
          <Button className="w-full sm:w-auto" size="lg" variant="secondary">
            กลับหน้าหลัก
          </Button>
        </Link>
      </div>
    </div>
  );
}
