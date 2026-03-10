import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const practices = [
  {
    label: "AI / ML Engineering",
    hot: true,
    roles: ["ML Engineers", "MLOps Engineers", "LLM Engineers", "AI Platform Engineers", "Data Scientists", "AI Security Specialists"],
  },
  {
    label: "Generative AI",
    hot: true,
    roles: ["GenAI Engineers", "RAG Specialists", "AI Agents Developers", "Prompt Engineers", "Fine-tuning Specialists"],
  },
  {
    label: "Data Platforms",
    hot: true,
    roles: ["Data Engineers", "Analytics Engineers", "Data Architects", "Databricks & Snowflake Specialists", "dbt Engineers"],
  },
  {
    label: "Cloud & Platform",
    hot: false,
    roles: ["Platform Engineers", "DevOps Engineers", "SREs", "Kubernetes Engineers", "AWS / GCP / Azure Architects"],
  },
  {
    label: "Cybersecurity",
    hot: false,
    roles: ["Security Engineers", "Cloud Security Architects", "SOC Analysts", "Penetration Testers", "IAM Specialists"],
  },
  {
    label: "Software Engineering",
    hot: false,
    roles: ["Backend Engineers", "Full-Stack Engineers", "API Architects", "Mobile Developers", "Distributed Systems Engineers"],
  },
  {
    label: "SAP & Enterprise",
    hot: false,
    roles: ["SAP S/4HANA Consultants", "SAP HANA Specialists", "SAP Basis Engineers", "SAP RISE Experts", "ERP Integration Engineers"],
  },
  {
    label: "Beyond These",
    hot: false,
    roles: ["Salesforce Developers", "QA Engineers", "Technical Program Managers", "Business Analysts", "IT Leadership"],
  },
];

const promise = [
  {
    number: "01",
    title: "Depth over volume",
    description:
      "Every candidate we present is technically evaluated — by engineers who have worked in the same domains. You receive a precise shortlist, never a resume pile.",
  },
  {
    number: "02",
    title: "We speak the language",
    description:
      "Our team has shipped production AI/ML systems at scale. We understand the difference between a platform engineer and a DevOps engineer — and why it matters to you.",
  },
  {
    number: "03",
    title: "Global reach, local accountability",
    description:
      "With operations across the US and India, we access a deep global talent network while delivering with the responsiveness of a dedicated partner.",
  },
  {
    number: "04",
    title: "Long-term thinking",
    description:
      "We measure success by how well placements perform — six months, twelve months, beyond. Retention matters more to us than throughput.",
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
            <p className="text-[19px] sm:text-[21px] text-[#6e6e73] leading-relaxed max-w-2xl mb-12 font-light">
              Orkka Solutions places exceptional technology professionals and delivers
              hands-on AI/ML infrastructure consulting — for teams that refuse to
              compromise on technical excellence.
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
                href="/contact?type=candidate"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-black/20 text-[#1d1d1f] text-[15px] font-medium hover:border-black/40 transition-all"
              >
                Find a Role
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-black/10 w-full" />
        </div>
      </section>

      {/* Two-sided value props */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div className="border-t border-black/10 pt-8">
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-5">
                For Companies
              </p>
              <h2 className="text-[26px] font-semibold text-[#1d1d1f] tracking-tight leading-snug mb-4">
                The right engineers, precisely matched to what you are building.
              </h2>
              <p className="text-[14px] text-[#6e6e73] leading-relaxed mb-6">
                We source and vet senior specialists across every technology domain. Not generalists — the precise profiles your most demanding technical roles require.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#1d1d1f] hover:opacity-60 transition-opacity group"
              >
                Start hiring
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="border-t border-black/10 pt-8">
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-5">
                For Professionals
              </p>
              <h2 className="text-[26px] font-semibold text-[#1d1d1f] tracking-tight leading-snug mb-4">
                Roles at companies building what comes next.
              </h2>
              <p className="text-[14px] text-[#6e6e73] leading-relaxed mb-6">
                We represent senior technology professionals — connecting them with companies that value depth of expertise and offer work worth doing.
              </p>
              <Link
                href="/contact?type=candidate"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#1d1d1f] hover:opacity-60 transition-opacity group"
              >
                Explore opportunities
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-black/10 w-full" />
      </div>

      {/* Expertise */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
                Expertise
              </p>
              <h2 className="text-[32px] sm:text-[38px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-5">
                Specialized in the disciplines that define modern technology.
              </h2>
              <p className="text-[14px] text-[#6e6e73] leading-relaxed mb-6">
                We focus on hard-to-find skill sets — the profiles most in demand and the hardest to source through conventional means.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#1d1d1f] hover:opacity-60 transition-opacity group"
              >
                View all services
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/8">
              {practices.map((p) => (
                <div
                  key={p.label}
                  className="bg-white p-6 hover:bg-[#f5f5f7] transition-colors relative"
                >
                  {p.hot && (
                    <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-[#1d1d1f] border border-black/15 rounded-full px-2 py-0.5">
                      High Demand
                    </span>
                  )}
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f] mb-2.5 pr-20">
                    {p.label}
                  </h3>
                  <p className="text-[12px] text-[#6e6e73] leading-relaxed">
                    {p.roles.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-black/10 w-full" />
      </div>

      {/* AI Infra consulting */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
              <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-5">
                Where We Go Deeper
              </p>
              <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6">
                AI/ML infrastructure is not just a practice area. It is what we have built.
              </h2>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-5">
                For teams that need more than talent placement — we deliver direct consulting engagements in AI/ML infrastructure, platform engineering, and cloud-native architecture. Led by engineers who have operated these systems in production, at scale.
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

      {/* Engagement models */}
      <section className="bg-[#f5f5f7] py-16 border-t border-black/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
            <p className="text-[13px] font-medium text-[#1d1d1f] whitespace-nowrap">
              Engagement models
            </p>
            <div className="flex flex-wrap gap-3">
              {engagements.map((e) => (
                <span
                  key={e}
                  className="text-[13px] text-[#1d1d1f] border border-black/15 rounded-full px-4 py-1.5"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-white py-24 md:py-32 border-t border-black/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
              Our Commitment
            </p>
            <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight text-[#1d1d1f] leading-tight max-w-xl">
              What you should expect from us, every time.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {promise.map((item) => (
              <div key={item.number} className="border-t border-black/10 pt-8">
                <p className="text-[11px] font-mono text-[#6e6e73] mb-4 tracking-wider">
                  {item.number}
                </p>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3 tracking-tight">
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

      {/* CTA */}
      <section className="bg-[#1d1d1f] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight text-white leading-tight">
                Ready to work together?
              </h2>
              <p className="mt-4 text-[17px] text-white/50 font-light leading-relaxed">
                Whether you are building a team, filling a critical role, or modernizing your AI infrastructure — tell us what you need.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#1d1d1f] text-[15px] font-medium hover:bg-white/90 transition-colors group"
              >
                Hire Talent
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact?type=candidate"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white text-[15px] font-medium hover:border-white/40 transition-all"
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
