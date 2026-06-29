type FlowProps = {
  items: string[];
};

export default function Flow({ items }: FlowProps) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <li key={item} className="subtle-card rounded-3xl p-5">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-4 text-sm leading-7 text-slate-600">{item}</p>
        </li>
      ))}
    </ol>
  );
}
