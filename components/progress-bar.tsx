interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round(((current + 1) / total) * 100);

  return (
    <div className="mb-6 h-2.5 w-full rounded-full bg-gray-200">
      <div
        className="h-2.5 rounded-full bg-blue-600 transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
      <p className="mt-2 text-right text-gray-500 text-xs">
        คำถามที่ {current + 1} จาก {total}
      </p>
    </div>
  );
}
