import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Orkka Solutions",
  description:
    "Orkka Solutions is an AI infrastructure consulting firm built by engineers who have shipped production systems at scale.",
};

const values = [
  {
    title: "Technical depth first",
    description:
      "Every engagement is led by engineers who have operated real production systems — not generalist consultants. We bring hard-won expertise, not slides.",
  },
  {
    title: "Outcomes over activity",
    description:
      "We measure success by what ships and what runs reliably in production, not by hours billed or deliverables delivered to a shared drive.",
  },
  {
    title: "Your team owns it",
    description:
      "We build with your team, not for them. Every system we deliver comes with the documentation, runbooks, and knowledge transfer to hand it over cleanly.",
  },
  {
    title: "Long-term thinking",
    description:
      "We architect for where you are going, not just where you are. The decisions we make today should not create the incidents of tomorrow.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-black/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-6">
            About
          </p>
          <h1 className="text-[48px] sm:text-[60px] font-semibold tracking-tight text-[#1d1d1f] leading-[1.05] mb-6 max-w-3xl">
            Built by engineers,
            <br className="hidden sm:block" /> for engineers.
          </h1>
          <p className="text-[19px] text-[#6e6e73] max-w-2xl font-light leading-relaxed">
            Orkka Solutions was founded on a simple belief: the best AI
            infrastructure work comes from people who have actually built it —
            not from firms that theorize about it.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white border-b border-black/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-5">
                Our Mission
              </p>
              <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-6">
                Accelerate the teams
                <br /> building the future.
              </h2>
              <div className="space-y-4 text-[15px] text-[#6e6e73] leading-relaxed">
                <p>
                  The biggest bottleneck for AI adoption is not ideas or models —
                  it is infrastructure. Companies know what they want to build.
                  They struggle to build the foundation that makes it reliable,
                  scalable, and maintainable.
                </p>
                <p>
                  Orkka Solutions exists to close that gap. We bring the
                  technical expertise, proven patterns, and senior engineers that
                  let teams move from prototype to production faster — and stay
                  there.
                </p>
                <p>
                  We work across the full stack: cloud infrastructure, Kubernetes
                  orchestration, MLOps pipelines, and the people who run them.
                </p>
              </div>
            </div>
            <div className="bg-[#f5f5f7] rounded-3xl p-10 lg:p-12">
              <div className="space-y-8">
                {[
                  { stat: "8+", label: "Years building production AI/ML systems" },
                  { stat: "AWS", label: "EKS, ECS, SageMaker, and the full cloud stack" },
                  { stat: "Global", label: "Serving US-based companies of every size" },
                ].map((item) => (
                  <div key={item.stat} className="border-b border-black/8 pb-8 last:border-0 last:pb-0">
                    <p className="text-[36px] font-semibold text-[#1d1d1f] tracking-tight leading-none mb-2">
                      {item.stat}
                    </p>
                    <p className="text-[14px] text-[#6e6e73]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#f5f5f7] border-b border-black/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[13px] font-medium text-[#6e6e73] uppercase tracking-widest mb-4">
              How We Work
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
              Principles we build by.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#f5f5f7] p-8 lg:p-10"
              >
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-3 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1d1d1f] py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight text-white leading-tight mb-6">
            Let&apos;s work together.
          </h2>
          <p className="text-[17px] text-white/60 mb-10 max-w-lg mx-auto font-light">
            Whether you need infrastructure built, a platform modernized, or a
            senior engineer for your team — we want to hear about it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#1d1d1f] text-[15px] font-medium hover:bg-white/90 transition-colors group"
          >
            Get in Touch
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
