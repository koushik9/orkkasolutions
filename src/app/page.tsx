import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const practices = [
  {
    label: "AI / ML Infrastructure",
    description: "LLMs, GPU orchestration, MLOps, inference at scale",
    hot: true,
  },
  {
    label: "Generative AI & LLM Engineering",
    description: "RAG pipelines, AI agents, fine-tuning, prompt systems",
    hot: true,
  },
  {
    label: "Data & Analytics Platforms",
    description: "Databricks, Snowflake, dbt, real-time streaming",
    hot: true,
  },
  {
    label: "Cloud Native & Platform Engineering",
    description: "Kubernetes, AWS / GCP / Azure, GitOps, IaC",
    hot: false,
  },
  {
    label: "Cybersecurity",
    description: "Zero Trust, cloud security, AI threat detection, SOC",
    hot: false,
  },
  {
    label: "SAP & S/4HANA",
    description: "S/4HANA migrations, SAP RISE, Basis, integrations",
    hot: false,
  },
  {
    label: "Software Engineering",
    description: "Backend, full-stack, APIs, distributed systems",
    hot: false,
  },
  {
    label: "Your Domain",
    description: "If the role is technical, we can place it. Tell us what you need.",
    hot: false,
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share the role, the stack, the team context, and what great looks like. The more detail, the better we can match.",
  },
  {
    number: "02",
    title: "We source and vet",
    description:
      "We tap our network of senior engineers and specialists across every domain. You get a shortlist — not a resume dump.",
  },
  {
    number: "03",
    title: "You meet your candidates",
    description:
      "Pre-screened, technically vetted, ready to contribute. Contract, contract-to-hire, or direct hire — your call.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-4xl">
            <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-6">
              Technology Staffing & AI Infrastructure Consulting
            </p>
            <h1 className="text-[48px] sm:text-[64px] lg:text-[76px] font-semibold leading-[1.05] tracking-tight text-[#1d1d1f] mb-8">
              Build the team that
              <br />
              builds your future.
            </h1>
            <p className="text-[19px] sm:text-[21px] text-[#6e6e73] leading-relaxed max-w-2xl mb-4 font-light">
              Orkka Solutions places elite technology professionals and delivers
              hands-on AI/ML infrastructure consulting — so your most ambitious
              technical bets actually ship.
            </p>
            <p className="text-[16px] text-[#6e6e73] leading-relaxed max-w-2xl mb-12 font-light">
              AI/ML · Generative AI · Data Platforms · Cloud Native · Cybersecurity · SAP · Software Engineering
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1d1d1f] text-white text-[15px] font-medium hover:bg-[#3d3d3f] transition-colors group"
              >
                Hire Talent
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-black/20 text-[#1d1d1f] text-[15px] font-medium hover:border-black/40 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-black/10 w-full" />
        </div>
      </section>

      {/* Practice areas */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
              What We Cover
            </p>
            <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
              The technologies that matter
              <br className="hidden sm:block" /> most right now.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8">
            {practices.map((p) => (
              <div
                key={p.label}
                className="bg-white p-7 hover:bg-[#f5f5f7] transition-colors group relative"
              >
                {p.hot && (
                  <span className="absolute top-5 right-5 text-[10px] font-semibold uppercase tracking-wider text-[#1d1d1f] border border-black/20 rounded-full px-2 py-0.5">
                    High Demand
                  </span>
                )}
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-2 pr-16 leading-snug">
                  {p.label}
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-black/10 w-full" />
      </div>

      {/* AI Infra consulting highlight */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-5">
                Core Expertise
              </p>
              <h2 className="text-[32px] sm:text-[42px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6">
                AI/ML infrastructure
                <br /> is what we do best.
              </h2>
              <p className="text-[16px] text-[#6e6e73] leading-relaxed mb-5">
                Beyond placing talent, we roll up our sleeves. Our team has
                built production AI/ML platforms at scale — Kubernetes-native
                model serving, GPU cluster orchestration, MLOps pipelines, and
                the cloud foundations that run them.
              </p>
              <p className="text-[16px] text-[#6e6e73] leading-relaxed mb-8">
                When you need engineers who have actually done it — not just
                read about it — that&apos;s us.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-[#1d1d1f] hover:opacity-60 transition-opacity group"
              >
                See our consulting services
                <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { tech: "Kubernetes", sub: "EKS · GKE · AKS" },
                { tech: "GPU Clusters", sub: "A100 · H100 · CUDA" },
                { tech: "MLOps", sub: "MLflow · Kubeflow · Airflow" },
                { tech: "LLM Serving", sub: "vLLM · Triton · KServe" },
                { tech: "AWS", sub: "EKS · SageMaker · ECS" },
                { tech: "GitOps", sub: "ArgoCD · Flux · Terraform" },
              ].map((item) => (
                <div key={item.tech} className="bg-[#f5f5f7] rounded-2xl p-5">
                  <p className="text-[15px] font-semibold text-[#1d1d1f] mb-1">
                    {item.tech}
                  </p>
                  <p className="text-[12px] text-[#6e6e73]">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-black/10 w-full" />
      </div>

      {/* How it works */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
              How It Works
            </p>
            <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
              Simple, fast, effective.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {howItWorks.map((step) => (
              <div key={step.number}>
                <p className="text-[12px] font-mono text-[#6e6e73] mb-5 tracking-wider">
                  {step.number}
                </p>
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1d1d1f] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold tracking-tight text-white leading-tight mb-6">
            Ready to build
            <br className="hidden sm:block" /> your tech team?
          </h2>
          <p className="text-[17px] text-white/60 mb-10 max-w-xl mx-auto font-light">
            Whether you need to hire a senior ML engineer next week or modernize
            your entire AI platform — we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#1d1d1f] text-[15px] font-medium hover:bg-white/90 transition-colors group"
            >
              Hire Talent
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/20 text-white text-[15px] font-medium hover:border-white/40 transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
