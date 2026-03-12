"use client"

import { SectionHeader } from "./section-header"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import {
  Code2,
  FileCode2,
  Braces,
  Layout,
  Wind,
  Columns3,
  FileType,
  ShoppingCart,
  Store,
  GitBranch,
  Figma,
  Image,
} from "lucide-react"

interface SkillItem {
  name: string
  icon: React.ElementType
}

interface SkillCategory {
  title: string
  skills: SkillItem[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FileCode2 },
      { name: "CSS", icon: Layout },
      { name: "JavaScript", icon: Braces },
      { name: "React", icon: Code2 },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Bootstrap", icon: Columns3 },
      { name: "jQuery", icon: FileType },
    ],
  },
  {
    title: "CMS",
    skills: [
      { name: "WordPress", icon: Code2 },
      { name: "WooCommerce", icon: ShoppingCart },
      { name: "Shopify", icon: Store },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Figma", icon: Figma },
      { name: "Photoshop", icon: Image },
    ],
  },
]

function SkillBadge({ skill }: { skill: SkillItem }) {
  return (
    <div className="group flex cursor-default items-center gap-2.5 rounded-xl border border-border/60 bg-secondary/30 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_16px_rgba(56,189,248,0.1)]">
      <skill.icon
        size={16}
        className="shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
      />
      <span className="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
        {skill.name}
      </span>
    </div>
  )
}

export function Skills() {
  const { ref, isVisible } = useAnimateOnScroll()

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="My Skills"
          title="Technologies & Tools"
          description="A snapshot of the technologies I work with daily."
        />

        <div
          ref={ref}
          className={`grid gap-8 md:grid-cols-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className="glass-card rounded-xl p-6"
              style={{ transitionDelay: `${catIdx * 150}ms` }}
            >
              <h3 className="mb-5 font-mono text-sm font-bold tracking-widest text-primary uppercase">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
