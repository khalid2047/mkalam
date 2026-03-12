"use client"

import { SectionHeader } from "./section-header"
import { Briefcase, Calendar } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const experiences = [
  {
    company: "A2Z Creatorz",
    role: "Front-End Developer",
    period: "June 2022 - Present",
    points: [
      "Develop and maintain responsive web applications using React, JavaScript, and modern CSS frameworks.",
      "Build custom WordPress themes and plugins for client projects with optimized performance.",
      "Collaborate with designers to translate Figma/PSD mockups into pixel-perfect web interfaces.",
      "Implement WooCommerce solutions for e-commerce clients with payment gateway integration.",
      "Optimize website speed, SEO, and accessibility across all projects.",
    ],
  },
]

export function Experience() {
  const { ref, isVisible } = useAnimateOnScroll()

  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Career Path"
          title="Work Experience"
          description="My professional journey in web development."
        />

        <div
          ref={ref}
          className={`mx-auto max-w-3xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {experiences.map((exp) => (
            <div key={exp.company} className="relative pl-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />

              {/* Timeline dot */}
              <div className="absolute -left-2 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary shadow-[0_0_12px_rgba(56,189,248,0.4)]">
                <div className="h-2 w-2 rounded-full bg-primary-foreground" />
              </div>

              <div className="glass-card rounded-xl p-6 ml-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.06)]">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-primary">{exp.company}</p>
                  </div>
                </div>

                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1">
                  <Calendar size={14} className="text-muted-foreground" />
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-2">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
