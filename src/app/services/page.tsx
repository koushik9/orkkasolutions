import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Bot, Database, Shield, Code2, Server, Briefcase, Layers, Cpu, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Orkka Solutions",
  description:
    "Technology staffing across every domain — AI/ML, data, security, development, cloud, SAP, and more. Plus hands-on AI infrastructure consulting.",
};

const staffingPractices = [
  {
    icon: Bot,
    title: "AI / ML",
    roles: ["ML Engineers", "MLOps Engineers", "AI Platform Engineers", "Data Scientists", "LLM Engineers"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    roles: ["Data Engineers", "Analytics Engineers", "Data Architects", "BI Developers", "Spark / dbt Specialists"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    roles: ["Security Engineers", "Cloud Security Architects", "SOC Analysts", "Penetration Testers", "IAM Specialists"],
  },
  {
    icon: Code2,
    title: "Software Development",
    roles: ["Backend Engineers", "Frontend Engineers", "Full-Stack Engineers", "Mobile Developers", "API Architects"],
  },
  {
    icon: Server,
    title: "Cloud & DevOps",
    roles: ["DevOps Engineers", "Platform Engineers", "SREs", "Kubernetes Engineers", "AWS / GCP / Azure Architects"],
  },
  {
    icon: Briefcase,
    title: "SAP & ERP",
    roles: ["SAP Consultants", "SAP HANA Specialists", "SAP Basis Admins", "ERP Integration Engineers", "SAP S/4HANA Experts"],
  },
  {
    icon: Globe,
    title: "Enterprise & Other",
    roles: ["IT Program Managers", "Technical Project Managers", "Business Analysts", "QA / Test Engineers", "Salesforce Developers"],
  },
  {
    icon: Layers,
    title: "Don't see yours?",
    roles: ["We staff across all technology domains.", "If the role is technical, we can help.", "Tell us what you need.", "", ""],
  },
];

const consultingServices = [
  {
    icon: Cpu,
    title: "AI/ML Infrastructure",
    description:
      "Kubernetes-native model serving, GPU orchestration, MLflow and Kubeflow pipelines, and end-to-end MLOps. We build the infrastructure that takes models from notebook to production.",
    capabilities: [
      "Model serving at scale (KServe, Triton, TorchServe)",
      "GPU cluster orchestration (A100, H100)",
      "MLOps pipeline design and implementation",
      "Feature stores and model registries",
      "Inference optimization and cost reduction",
    ],
  },
  {
    icon: Server,
    title: "Platform Engineering",
    description:
      "Cloud-native platforms on AWS, GCP, and Azure. Infrastructure as code, GitOps-first deployments, and developer platforms that let your engineers ship faster.",
    capabilities: [
      "AWS EKS, GKE, AKS design and management",
      "Terraform and Pulumi infrastructure as code",
      "ArgoCD / Flux GitOps workflows",
      "CI/CD pipeline architecture",
      "FinOps and cloud cost optimization",
    ],
  },
];

const placementTypes = [
  {
    type: "Contract",
    description: "Specialized talent for 3–12 month engagements. Fast to start, built for project-based work.",
  },
  {
    type: "Contract-to-Hire",
    description: "Try before you commit. Bring someone on contract with the option to convert to full-time.",
  },
  {
    type: "Direct Hire",
    description: "Full-time placement for permanent roles. We handle sourcing, screening, and delivery.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-black/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-6">
            Services
          </p>
          <h1 className="text-[48px] sm:text-[60px] font-semibold tracking-tight text-[#1d1d1f] leading-[1.05] mb-6">
            Staffing across every
            <br className="hidden sm:block" /> technology domain.
          </h1>
          <p className="text-[19px] text-[#6e6e73] max-w-2xl font-light leading-relaxed">
            From AI/ML and data to security, development, cloud, and SAP — we
            find the right technical talent for your team, on your timeline.
          </p>
        </div>
      </section>

      {/* Staffing practices */}
      <section className="py-20 md:py-28 bg-white border-b border-black/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
              Technology Staffing
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
              Every domain. Every level.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8">
            {staffingPractices.map((practice) => {
              const Icon = practice.icon;
              return (
                <div key={practice.title} className="bg-white p-7 hover:bg-[#f5f5f7] transition-colors">
                  <div className="flex items-center gap-3 mb-5">
                    <Icon size={18} strokeWidth={1.5} className="text-[#1d1d1f]" />
                    <h3 className="text-[15px] font-semibold text-[#1d1d1f]">{practice.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {practice.roles.filter(Boolean).map((role) => (
                      <li key={role} className="text-[13px] text-[#6e6e73] leading-snug">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placement types */}
      <section className="py-20 md:py-24 bg-[#f5f5f7] border-b border-black/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
              Engagement Models
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
              Flexible for how you hire.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {placementTypes.map((p) => (
              <div key={p.type} className="bg-white p-8 rounded-2xl border border-black/8">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">{p.type}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section className="py-20 md:py-28 bg-white border-b border-black/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
              Consulting Services
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
              Hands-on when you need more
              <br className="hidden sm:block" /> than a hire.
            </h2>
            <p className="mt-4 text-[16px] text-[#6e6e73] max-w-xl">
              For teams that need direct technical execution — not just
              talent — we offer focused consulting in AI/ML infrastructure and
              platform engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/8">
            {consultingServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-white p-8 lg:p-10">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-black/5 mb-5">
                    <Icon size={20} strokeWidth={1.5} className="text-[#1d1d1f]" />
                  </div>
                  <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <CheckCircle size={15} strokeWidth={1.5} className="text-[#1d1d1f] mt-0.5 flex-shrink-0" />
                        <span className="text-[13px] text-[#1d1d1f] leading-snug">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1d1d1f] py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight text-white leading-tight mb-6">
            Let&apos;s find your next hire.
          </h2>
          <p className="text-[17px] text-white/60 mb-10 max-w-lg mx-auto font-light">
            Tell us the role, the team, and what great looks like. We will take
            it from there.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#1d1d1f] text-[15px] font-medium hover:bg-white/90 transition-colors group"
          >
            Get Started
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
