type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="container-page section-space scroll-mt-20">
      <div className="mb-10 max-w-3xl">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2 className="section-title">{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
