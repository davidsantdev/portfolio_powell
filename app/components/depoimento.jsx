"use client";

import { useEffect, useRef, useState } from "react";

export default function Testimonial() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen bg-[#020617] flex items-center justify-center px-6 py-24 font-sans">
      
      <div ref={ref} className="max-w-2xl w-full">

        {/* Tag */}
        <div
          className={`flex items-center gap-3 mb-10 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-6 h-px bg-cyan-400" />
          <span className="text-cyan-400 text-[11px] tracking-[0.25em] uppercase font-medium">
            depoimento
          </span>
        </div>

        {/* Quote */}
        <blockquote
          className={`mb-10 transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[#0f172a] text-8xl leading-none select-none block -mb-6">
            "
          </span>

          <p className="text-[#e2e8f0] text-[1.3rem] leading-[1.7] font-normal">
            Tive uma ótima experiência trabalhando com o David. Ele demonstrou{" "}
            <span className="text-cyan-400 font-medium">
              comprometimento, responsabilidade
            </span>{" "}
            e muita dedicação ao projeto do início ao fim. Sempre buscou entregar{" "}
            <span className="text-cyan-400 font-medium">
              soluções bem estruturadas
            </span>
            , com atenção aos detalhes e foco na qualidade.
          </p>
        </blockquote>

        {/* Divider */}
        <div
          className={`h-px bg-[#0f172a] mb-8 transition-all duration-500 delay-300 origin-left ${
            visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        {/* Footer */}
        <div
          className={`flex items-center justify-between transition-all duration-500 delay-[420ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#020617] border border-[#1e293b] flex items-center justify-center text-cyan-400 font-semibold">
              A
            </div>

            <div>
              <p className="text-[#e2e8f0] text-sm font-medium">
                Supermercado Alô Pará
              </p>
              <p className="text-[#64748b] text-xs mt-0.5 tracking-wide">
                Diretor de Comunicação · Mar 2026
              </p>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 text-cyan-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <span className="text-[#64748b] text-xs">
              4.8
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}