import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const clientPractices = [
  "AI / ML Engineering",
  "Generative AI & LLMs",
  "Data Platforms",
  "Cloud & Platform Engineering",
  "Cybersecurity",
  "Software Engineering",
  "SAP & Enterprise",
  "And every domain in between",
];

const promise = [
  {
    number: "01",
    title: "Depth over volume",
    description:
      "Every candidate we present is technically evaluated by engineers who have worked in the same domains. You receive a precise shortlist — never a resume pile.",
  },
  {
    number: "02",
    title: "We speak the language",
    description:
      "Our team has shipped production AI/ML systems at scale. We understand the nuance of the roles you are hiring for — and we find people who do too.",
  },
  {
    number: "03",
    title: "Global reach, direct accountability",
    description:
      "With operations across the US and India, we access a deep global talent network while delivering with the responsiveness of a dedicated partner.",
  },
  {
    number: "04",
    title: "Retention is our metric",
    description:
      "We measure success by how well placements perform — six months and beyond. Long-term fit matters more to us than throughput.",
  },
];

const engagements = [
  "Contract",
  "Contract-to-Hire",
  "Direct Hire",
  "Employer of Record",
  "Statement of Work",
  "Offshore Staffing",
];

export default function HomePage() {
  return (
    <>
      {/* Hero — minimal top */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-5">
            Technology Staffing & AI Infrastructure Consulting
          </p>
          <h1 className="text-[44px] sm:text-[58px] lg:text-[68px] font-semibold leading-[1.06] tracking-tight text-[#1d1d1f] mb-6 max-w-4xl mx-auto">
            Exceptional technology talent, precisely placed.
          </h1>
          <p className="text-[18px] text-[#6e6e73] leading-relaxed max-w-2xl mx-auto font-light">
            Orkka Solutions connects companies with senior technology professionals across every domain — and delivers hands-on AI/ML infrastructure consulting for teams that demand more.
          </p>
        </div>
      </section>

      {/* Primary split — For Companies / For Professionals */}
      <section className="bg-white pb-8 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* For Companies */}
            <div className="bg-[#1d1d1f] rounded-3xl p-10 lg:p-14 flex flex-col min-h-[480px]">
              <div className="flex-1">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-6">
                  For Companies
                </p>
                <h2 className="text-[32px] sm:text-[38px] font-semibold text-white leading-tight tracking-tight mb-5">
                  Find the engineers
                  <br />your hardest roles
                  <br />demand.
                </h2>
                <p className="text-[15px] text-white/60 leading-relaxed mb-8 max-w-sm">
                  We source and vet senior specialists across AI/ML, data, cloud, security, SAP, software engineering, and beyond. Precise matches — not resume volume.
                </p>
                <ul className="space-y-2 mb-10">
                  {clientPractices.slice(0, 6).map((p) => (
                    <li key={p} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                      <span className="text-[13px] text-white/50">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#1d1d1f] text-[14px] font-medium hover:bg-white/90 transition-colors group"
                >
                  Hire Talent
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white text-[14px] font-medium hover:border-white/40 transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* For Professionals */}
            <div className="bg-[#f5f5f7] rounded-3xl p-10 lg:p-14 flex flex-col min-h-[480px]">
              <div className="flex-1">
                <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-6">
                  For Professionals
                </p>
                <h2 className="text-[32px] sm:text-[38px] font-semibold text-[#1d1d1f] leading-tight tracking-tight mb-5">
                  Roles at companies
                  <br />building what
                  <br />comes next.
                </h2>
                <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-8 max-w-sm">
                  We represent senior technology professionals — connecting them with companies that value expertise and offer work worth doing. Contract, direct hire, and beyond.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {[
                    "ML Engineers",
                    "Platform Engineers",
                    "Data Engineers",
                    "Security Architects",
                    "SAP Consultants",
                    "Full-Stack Engineers",
                    "DevOps Engineers",
                    "GenAI Specialists",
                  ].map((role) => (
                    <span
                      key={role}
                      className="text-[12px] text-[#1d1d1f] border border-black/12 rounded-full px-3 py-1"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact?type=candidate"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1d1d1f] text-white text-[14px] font-medium hover:bg-[#3d3d3f] transition-colors group"
                >
                  Find a Role
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Engagement models strip */}
      <section className="bg-white py-12 border-b border-black/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
            <p className="text-[12px] font-semibold text-[#6e6e73] uppercase tracking-widest whitespace-nowrap">
              Engagement Models
            </p>
            <div className="flex flex-wrap gap-2.5">
              {engagements.map((e) => (
                <span
                  key={e}
                  className="text-[13px] text-[#1d1d1f] border border-black/12 rounded-full px-4 py-1.5"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Infra consulting */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
              <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-5">
                Where We Go Deeper
              </p>
              <h2 className="text-[32px] sm:text-[42px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6">
                AI/ML infrastructure is not just a practice area. It is what we have built.
              </h2>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-5">
                For teams that need more than talent placement — we deliver direct consulting in AI/ML infrastructure, platform engineering, and cloud-native architecture. Led by engineers who have operated these systems in production, at scale.
              </p>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-8">
                Kubernetes-native model serving. GPU orchestration. End-to-end MLOps. We have built it — and we can build it for you.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1d1d1f] text-white text-[14px] font-medium hover:bg-[#3d3d3f] transition-colors group"
              >
                View consulting services
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { tech: "Kubernetes", sub: "EKS · GKE · AKS" },
                { tech: "GPU Infrastructure", sub: "A100 · H100 · CUDA" },
                { tech: "MLOps", sub: "MLflow · Kubeflow · Airflow" },
                { tech: "LLM Serving", sub: "vLLM · Triton · KServe" },
                { tech: "AWS", sub: "EKS · SageMaker · ECS" },
                { tech: "GitOps", sub: "ArgoCD · Flux · Terraform" },
              ].map((item) => (
                <div key={item.tech} className="bg-[#f5f5f7] rounded-2xl p-5">
                  <p className="text-[14px] font-semibold text-[#1d1d1f] mb-1">{item.tech}</p>
                  <p className="text-[11px] text-[#6e6e73] tracking-wide">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-[#f5f5f7] py-24 md:py-32 border-t border-black/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
              Our Commitment
            </p>
            <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight text-[#1d1d1f] leading-tight max-w-xl">
              What you should expect from us, every time.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {promise.map((item) => (
              <div key={item.number} className="border-t border-black/10 pt-8">
                <p className="text-[11px] font-mono text-[#6e6e73] mb-4 tracking-wider">
                  {item.number}
                </p>
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1d1d1f] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-white leading-tight">
                Ready to work together?
              </h2>
              <p className="mt-3 text-[16px] text-white/50 font-light max-w-md">
                Whether you are building a team, finding your next role, or modernizing your AI infrastructure — we are ready.
              </p>
            </div>
            <div className="flex flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1d1d1f] text-[14px] font-medium hover:bg-white/90 transition-colors group"
              >
                Hire Talent
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact?type=candidate"
                className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 text-white text-[14px] font-medium hover:border-white/40 transition-all"
              >
                Find a Role
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
