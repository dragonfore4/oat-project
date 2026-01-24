import Link from "next/link";
import { topics } from "@/lib";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 p-6">
      <main className="flex w-full max-w-4xl flex-col items-center text-center">
        <h1 className="mb-6 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text py-2 font-extrabold text-4xl text-transparent md:text-5xl">
          ค้นหาตัวตนของคุณ
        </h1>

        <p className="mb-10 max-w-lg text-gray-600 text-lg leading-relaxed md:text-xl">
          เลือกหัวข้อที่คุณสนใจ เพื่อเริ่มทำแบบทดสอบค้นหาตัวตนที่ซ่อนอยู่ของคุณ
        </p>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {topics.map((topic) => (
            <Link
              className="group"
              href={`/quiz?topicId=${topic.id}`}
              key={topic.id}
              passHref
            >
              <div className="flex h-full transform flex-col items-center rounded-2xl border border-transparent bg-white p-8 text-center shadow-lg transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-600">
                  {/* Simple icon mapping based on topic ID */}
                  {topic.id === "finance" && "💼"}
                  {topic.id === "health" && "🗣️"}
                  {topic.id === "love" && "❤️"}
                  {topic.id === "work" && "☕"}
                </div>
                <h2 className="mb-2 font-bold text-2xl text-gray-800 transition-colors group-hover:text-blue-600">
                  {topic.title}
                </h2>
                <p className="text-gray-500">{topic.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-gray-400 text-sm">
          แต่ละหัวข้อใช้เวลาทำเพียง 1-2 นาที • ไม่มีการเก็บข้อมูลส่วนตัว
        </div>
      </main>
    </div>
  );
}
