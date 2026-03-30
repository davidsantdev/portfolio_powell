"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  "Vue", "React", "Nuxt", "Next.js", "TypeScript", "Tailwind", "Shadcn", "Axios",
];

const links = [
  { label: "GitHub", href: "https://github.com/davidsantdev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davidsantdev/" },
  { label: "E-mail", href: "mailto:davidsantosdacosta123@gmail.com" },
];

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-[#020617] border-t border-[#0f172a] px-6 py-24 overflow-hidden font-sans">
      <div id="contato" ref={ref} className="max-w-4xl mx-auto">

        {/* Label */}
        <div
          className={`flex items-center gap-3 mb-12 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-6 h-px bg-cyan-400" />
          <span className="text-cyan-400 text-[11px] tracking-[0.25em] uppercase font-medium">
            disponível para projetos
          </span>
        </div>

        {/* Heading */}
        <div
          className={`mb-14 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-[#e2e8f0] leading-[1.1] mb-4 text-[clamp(2.5rem,6vw,5rem)] font-semibold">
            Vamos construir
            <br />
            <span className="text-cyan-400">algo juntos?</span>
          </h2>

          <p className="text-[#64748b] text-sm max-w-md leading-relaxed">
            Design & desenvolvimento frontend com foco em interfaces modernas,
            performáticas e bem estruturadas.
          </p>
        </div>

        {/* Skills */}
        <div
          className={`flex flex-wrap gap-2 mb-16 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 border border-[#1e293b] text-[#64748b] text-xs rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          className={`h-px bg-[#0f172a] mb-10 transition-all duration-500 delay-300 origin-left ${
            visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        {/* Bottom */}
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-500 delay-[400ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#020617] border border-[#1e293b] flex items-center justify-center text-cyan-400 text-sm font-semibold">
              D
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#e2e8f0] text-sm font-medium">
                  David Powell
                </span>

                <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <p className="text-[#475569] text-xs mt-0.5">
                Designer × Frontend Developer · Novo Repartimento, PA
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[#475569] text-xs hover:text-cyan-400 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p
          className={`text-[#334155] text-xs mt-10 transition-all duration-500 delay-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          © {new Date().getFullYear()} David Powell. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}