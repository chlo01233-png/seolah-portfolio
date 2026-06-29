import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div className="card max-w-md rounded-[2rem] p-8">
        <p className="section-eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">페이지를 찾을 수 없습니다</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">요청한 프로젝트 페이지가 존재하지 않습니다.</p>
        <Link href="/" className="focus-ring mt-8 inline-flex h-11 items-center rounded-full bg-blue-600 px-5 text-sm font-bold text-white transition hover:bg-blue-700">
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
