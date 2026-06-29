import Link from "next/link";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-600/20",
  secondary:
    "border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50",
  ghost:
    "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
};

export default function LinkButton({
  href,
  children,
  variant = "primary",
  external = false,
  disabled = false,
}: LinkButtonProps) {
  const className = `focus-ring inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-bold transition ${variants[variant]}`;

  if (disabled || href === "#") {
    return (
      <span aria-disabled="true" className={`${className} cursor-not-allowed opacity-45`}>
        {children}
      </span>
    );
  }

  if (external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
