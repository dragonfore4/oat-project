import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <main className="flex max-w-2xl flex-col items-center rounded-3xl border border-white/50 bg-white p-12 text-center shadow-xl backdrop-blur-sm">
        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text py-2 font-extrabold text-4xl text-transparent md:text-5xl">
          ค้นหาตัวตนของคุณ
        </h1>

        <p className="mb-10 max-w-lg text-gray-600 text-lg leading-relaxed md:text-xl">
          ทำแบบทดสอบบุคลิกภาพสั้นๆ เพื่อค้นพบจุดเด่นและนิสัยที่ซ่อนอยู่ของคุณ
          ผ่านคำถามที่เข้าใจง่ายและสนุก!
        </p>

        <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
          <Link href="/quiz" passHref>
            <Button
              className="h-auto w-full transform px-8 py-6 text-lg shadow-blue-500/20 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-500/40 sm:w-auto"
              size="lg"
            >
              เริ่มทำแบบทดสอบ
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-gray-400 text-sm">
          ใช้เวลาเพียง 2-3 นาที • ไม่มีการเก็บข้อมูลส่วนตัว
        </div>
      </main>
    </div>
  );
}
