import Badge from "@/components/Badge";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { career, heroStats, problemSolving, profile, projects, skills, strengths } from "@/data/portfolio";

const aboutParagraphs = [
  "공공기관에서 예산·계약·기업지원 업무를 담당하며 일정 관리, 문서화, 협업 커뮤니케이션을 경험했습니다. 개발 교육 과정에서는 웹 서비스를 직접 기획하고 Java/Spring, React 기반 프로젝트를 구현했습니다.",
  "기능을 나열하는 것보다 사용자가 서비스를 이용하는 순서, 데이터가 이동하는 과정, 예외 상황까지 함께 정리해 구현하는 편입니다.",
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Header />

      <section className="container-page grid min-h-[calc(100vh-64px)] items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            {profile.keywords.map((keyword) => (
              <Badge key={keyword} variant="blue">
                {keyword}
              </Badge>
            ))}
          </div>

          <p className="section-eyebrow">{profile.title}</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(44px,6vw,78px)] font-black leading-[1.04] tracking-[-0.065em] text-slate-950">
            {profile.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-600">
            {profile.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <LinkButton href="#projects">프로젝트 보기</LinkButton>
            <LinkButton href={profile.github} variant="secondary" external>
              GitHub 보기
            </LinkButton>
          </div>

          <dl className="mt-12 grid gap-3 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="subtle-card rounded-3xl p-5">
                <dt className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                  {item.label}
                </dt>
                <dd className="mt-3 text-xl font-black text-slate-950">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="card rounded-[2.25rem] p-7 sm:p-8">
          <div className="flex items-start justify-between gap-6 border-b border-slate-200 pb-7">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                Selected Case Studies
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                프로젝트 구현 경험
              </h2>
            </div>
            <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-black text-white">
              2026
            </span>
          </div>

          <div className="mt-6 grid gap-4">
            {projects.map((project) => (
              <a
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="focus-ring block rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-slate-950">{project.name}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{project.subtitle}</p>
                  </div>
                  <span className="text-slate-300">↗</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">Focus</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              비즈니스 로직, 사용자 상태, 외부 API, 예외 처리를 중심으로 구현 경험을 정리했습니다.
            </p>
          </div>
        </aside>
      </section>

      <Section
        id="about"
        eyebrow="About"
        title="서비스 흐름을 기준으로 구현합니다"
        description="이전 업무 경험과 개발 프로젝트 경험을 함께 정리했습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="card rounded-[2rem] p-7 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Profile</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950">{profile.name}</h3>
            <div className="mt-6 space-y-5 text-base leading-9 text-slate-600">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <article key={strength.title} className="subtle-card rounded-[1.75rem] p-6">
                <h3 className="text-lg font-black tracking-tight text-slate-950">{strength.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{strength.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Skills"
        title="프로젝트에 적용한 기술 스택"
        description="실제 프로젝트에서 사용한 기술과 적용 범위를 기준으로 정리했습니다."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {skills.map((skill) => (
            <article key={skill.category} className="card rounded-[2rem] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <h3 className="text-xl font-black tracking-tight text-slate-950">{skill.category}</h3>
                <span className="text-sm font-black text-slate-300">{skill.items.length}</span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600">{skill.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Selected Projects"
        title="대표 프로젝트"
        description="DonWorry는 Spring MVC 기반 계산 로직과 근무 관리, 축제로는 React/Spring Boot와 외부 API·추천 흐름을 중심으로 정리했습니다."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Section>

      <Section
        id="problem-solving"
        eyebrow="Problem Solving"
        title="문제 해결 경험"
        description="구현 중 발생한 오류를 원인과 수정 기준으로 정리했습니다."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {problemSolving.map((item, index) => (
            <article key={item.title} className="subtle-card rounded-[1.75rem] p-6">
              <span className="text-xs font-black text-blue-600">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="background"
        eyebrow="Background"
        title="업무 경험과 개발 역량"
        description="이전 업무 경험은 일정 관리, 문서화, 협업 방식으로 이어졌습니다."
      >
        <div className="card rounded-[2rem] p-6 sm:p-8">
          <ol className="grid gap-5">
            {career.map((item) => (
              <li key={`${item.period}-${item.title}`} className="grid gap-4 border-b border-slate-200 pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[160px_1fr]">
                <p className="text-sm font-black text-blue-600">{item.period}</p>
                <div>
                  <h3 className="text-lg font-black tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Contact">
        <div className="card rounded-[2rem] bg-slate-950 p-8 text-black sm:p-10">
          <p className="max-w-2xl text-lg leading-9 text-slate-300">
            프로젝트와 코드에 대해 더 자세히 이야기할 수 있습니다.
          </p>
          <p className="max-w-2xl text-lg leading-9 text-slate-300">
            Email:chlo01233@gmail.com
            </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={`mailto:${profile.email}`}>Email 보내기</LinkButton>
            <LinkButton href={profile.github} variant="secondary" external>
              GitHub 바로가기
            </LinkButton>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
