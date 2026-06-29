import Badge from "@/components/Badge";
import LinkButton from "@/components/LinkButton";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const repositories = project.links.repositories;

  return (
    <article className="card group flex h-full flex-col rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.09)] sm:p-7">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="blue">{project.label}</Badge>
          <Badge>{project.period.split("/")[1]?.trim() ?? project.period}</Badge>
        </div>
        <span className="text-sm font-black text-slate-300">0{index + 1}</span>
      </div>

      <div className="flex-1">
        <h3 className="text-3xl font-black tracking-tight text-slate-950">{project.name}</h3>
        <p className="mt-3 text-base font-bold leading-7 text-slate-700">{project.subtitle}</p>
        <p className="mt-5 text-sm leading-7 text-slate-600">{project.summary}</p>

        <div className="mt-7 grid gap-4 border-t border-slate-200 pt-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Problem</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">My Role</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">{project.role}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.slice(0, 9).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href={`/projects/${project.slug}`}>Case Study</LinkButton>
        {repositories.map((repository) => (
          <a
            key={repository.url}
            href={repository.url}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
          >
            {repository.label}
          </a>
        ))}
      </div>
    </article>
  );
}
