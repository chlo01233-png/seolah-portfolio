import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/45 py-10 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
    </footer>
  );
}
