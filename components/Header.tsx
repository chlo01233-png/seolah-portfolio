import { navItems, profile } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#fbfaf8]/85 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="focus-ring flex items-center gap-3 rounded-full" aria-label="홈으로 이동">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 text-sm font-black text-white">
            H
          </span>
          <span className="hidden text-sm font-black tracking-tight text-slate-950 sm:inline">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full text-sm font-bold text-slate-500 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="focus-ring inline-flex h-10 items-center rounded-full border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
