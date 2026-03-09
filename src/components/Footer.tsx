import Link from "next/link";

const footerLinks = [
  {
    heading: "Staffing",
    links: [
      { label: "AI / ML", href: "/services#aiml" },
      { label: "Data Engineering", href: "/services#data" },
      { label: "Cybersecurity", href: "/services#security" },
      { label: "Software Development", href: "/services#dev" },
      { label: "Cloud & DevOps", href: "/services#cloud" },
      { label: "SAP & ERP", href: "/services#sap" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-[15px] font-semibold text-[#1d1d1f] mb-3">
              Orkka Solutions
            </p>
            <p className="text-[13px] text-[#6e6e73] leading-relaxed max-w-xs">
              Technology staffing and consulting for companies building with the
              best talent in every domain.
            </p>
            <p className="mt-4 text-[13px] text-[#6e6e73]">
              <a
                href="mailto:hello@orkkasolutions.com"
                className="hover:text-[#1d1d1f] transition-colors"
              >
                hello@orkkasolutions.com
              </a>
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-4">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#6e6e73]">
            © {new Date().getFullYear()} Orkka Solutions. All rights reserved.
          </p>
          <p className="text-[12px] text-[#6e6e73]">orkkasolutions.com</p>
        </div>
      </div>
    </footer>
  );
}
