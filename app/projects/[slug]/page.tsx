import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "@/components/Badge";
import Flow from "@/components/Flow";
import Footer from "@/components/Footer";
import LinkButton from "@/components/LinkButton";
import Section from "@/components/Section";
import { projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const tabs = [
  { label: "Overview", href: "#overview" },
  { label: "Role", href: "#role" },
  { label: "Features", href: "#features" },
  { label: "Flow", href: "#flow" },
  { label: "Troubleshooting", href: "#troubleshooting" },
];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | 홍설아 Portfolio`,
    description: project.summary,
  };
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="subtle-card rounded-3xl p-5">
      <dt className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{label}</dt>
      <dd className="mt-3 text-sm font-bold leading-7 text-slate-900">{value}</dd>
    </div>
  );
}

function ProblemCard({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <article className="card rounded-[2rem] p-6">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">{label}</p>
      <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function TroubleBlock({
  label,
  title,
  text,
  accent,
}: {
  label: string;
  title: string;
  text: string;
  accent: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5">
      <p className={`text-xs font-black uppercase tracking-[0.16em] ${accent}`}>{label}</p>
      <h4 className="mt-3 text-sm font-black text-slate-950">{title}</h4>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((item) => item.slug !== project.slug);
  const repositories = project.links.repositories;
  const hasDemo = Boolean(project.links.demo);
  const detailHref = project.links.detail ?? "#overview";
  const isDetailPdf = detailHref.toLowerCase().endsWith(".pdf");

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#fbfaf8]/85 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link href="/" className="focus-ring rounded-full text-sm font-black text-slate-700 transition hover:text-slate-950">
            ← Portfolio Home
          </Link>
          <nav className="hidden items-center gap-6 md:flex" aria-label="프로젝트 상세 메뉴">
            {tabs.map((tab) => (
              <a key={tab.href} href={tab.href} className="text-sm font-bold text-slate-500 transition hover:text-slate-950">
                {tab.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            {repositories.map((repository) => (
              <a
                key={repository.url}
                href={repository.url}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-800 transition hover:border-slate-300"
              >
                {repository.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="container-page grid gap-10 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="blue">{project.label}</Badge>
            <Badge>Case Study</Badge>
          </div>

          <h1 className="mt-7 text-[clamp(44px,6vw,72px)] font-black leading-[1.04] tracking-[-0.065em] text-slate-950">
            {project.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-bold leading-8 text-slate-700">{project.subtitle}</p>
          <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-600">{project.summary}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {repositories.map((repository) => (
              <LinkButton key={repository.url} href={repository.url} external>
                {repository.label}
              </LinkButton>
            ))}
            <LinkButton href={project.links.demo ?? "#"} variant="secondary" external={hasDemo} disabled={!hasDemo}>
              {project.links.demoLabel ?? "Live Demo"}
            </LinkButton>
            <LinkButton href={detailHref} variant="ghost" external={isDetailPdf}>
              {project.links.detailLabel ?? "상세 내용 보기"}
            </LinkButton>
          </div>
          {project.links.demoNote ? (
            <p className="mt-4 text-sm leading-7 text-slate-500">{project.links.demoNote}</p>
          ) : null}
        </div>

        <aside className="card rounded-[2.25rem] p-7 sm:p-8">
          <p className="section-eyebrow">Project Brief</p>
          <dl className="mt-6 grid gap-4">
            <InfoCard label="Period" value={project.period} />
            <InfoCard label="Team" value={project.team} />
            <InfoCard label="My Role" value={project.role} />
          </dl>
          <div className="mt-7 border-t border-slate-200 pt-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Tech Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <Section
        id="overview"
        eyebrow="Overview"
        title="문제 정의와 해결 방향"
        description="문제 상황과 구현 방향, 완성 범위를 기준으로 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <ProblemCard label="Problem" title="해결하고자 한 문제" text={project.problem} />
          <ProblemCard label="Solution" title="구현한 해결 방법" text={project.solution} />
          <ProblemCard label="Result" title="완성한 결과" text={project.result} />
        </div>
      </Section>

      <Section
        id="role"
        eyebrow="Contribution"
        title="담당 역할과 기여"
        description="역할과 구현 기여를 분리해 확인할 수 있도록 구성했습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <article className="card self-start rounded-[2rem] bg-slate-950 p-6 text-white sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">My Position</p>
            <h3 className="mt-4 text-2xl font-black tracking-tight">{project.positionTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{project.positionDescription}</p>
          </article>

          <div className="grid gap-4 md:grid-cols-2">
            {project.contribution.map((item, index) => (
              <article key={item} className="subtle-card rounded-[1.75rem] p-5">
                <span className="text-xs font-black text-blue-600">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="features"
        eyebrow="Core Features"
        title="주요 기능 구현"
        description="프로젝트의 구현 범위를 기능 단위로 정리했습니다."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {project.features.map((feature, index) => (
            <article key={feature} className="subtle-card rounded-[1.75rem] p-5">
              <div className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-slate-950 text-xs font-black text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-slate-600">{feature}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="flow"
        eyebrow="Service Flow"
        title="서비스 데이터 흐름"
        description="사용자 입력부터 처리 결과까지 이어지는 흐름입니다."
      >
        <Flow items={project.flow} />
      </Section>

      <Section
        id="troubleshooting"
        eyebrow="Troubleshooting"
        title="문제 원인 분석과 해결"
        description="발생한 문제를 원인과 수정 과정 중심으로 정리했습니다."
      >
        <div className="grid gap-6">
          {project.troubleShooting.map((item, index) => (
            <article key={item.title} className="card overflow-hidden rounded-[2rem]">
              <div className="border-b border-slate-200 p-6 sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                  Trouble {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">{item.title}</h3>
              </div>
              <div className="grid gap-4 p-5 sm:p-6 lg:grid-cols-2">
                <TroubleBlock label="Issue" title="문제 상황" text={item.issue} accent="text-rose-600" />
                <TroubleBlock label="Cause" title="원인 분석" text={item.cause} accent="text-amber-600" />
                <TroubleBlock label="Solution" title="해결 방법" text={item.solution} accent="text-blue-600" />
                <TroubleBlock label="Learned" title="배운 점" text={item.learned} accent="text-emerald-600" />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="container-page py-16">
        <div className="card rounded-[2rem] p-8 sm:p-10">
          <p className="section-eyebrow">Next Project</p>
          <div className="mt-5 flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950">다른 프로젝트 보기</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                프로젝트별로 강조한 구현 범위와 문제 해결 방식이 다릅니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {otherProjects.map((item) => (
                <LinkButton key={item.slug} href={`/projects/${item.slug}`} variant="secondary">
                  {item.name} 보기
                </LinkButton>
              ))}
              <LinkButton href="/" variant="ghost">
                홈으로
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
