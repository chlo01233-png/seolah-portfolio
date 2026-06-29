type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "blue" | "dark";
};

const variants = {
  default:
    "border-slate-200 bg-white text-slate-600",
  blue:
    "border-blue-100 bg-blue-50 text-blue-700",
  dark:
    "border-slate-800 bg-slate-950 text-white",
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold leading-none ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
