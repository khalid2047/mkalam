"use client"

import { useState } from "react"
import { SectionHeader } from "./section-header"
import { ExternalLink, Code2 } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

type ProjectCategory =
  | "All Projects"
  | "WordPress"
  | "E-Commerce"
  | "Shopify"
  | "Custom Development"

interface Project {
  name: string
  description: string
  tech: string[]
  image: string
  link: string
  categories: ProjectCategory[]
}

const tabs: ProjectCategory[] = [
  "All Projects",
  "WordPress",
  "E-Commerce",
  "Shopify",
  "Custom Development",
]

const projects: Project[] = [
  {
    name: "State Life Insurance",
    description:
      "Corporate website for State Life Insurance with modern UI, policy information, and customer portal integration.",
    tech: ["WordPress", "Custom Theme", "PHP", "CSS"],
    image: "/images/project-statelife.jpg",
    link: "#",
    categories: ["All Projects", "WordPress", "Custom Development"],
  },
  {
    name: "Maariful Oud",
    description:
      "Luxury perfume e-commerce store with premium product showcase, filtering, and WooCommerce checkout.",
    tech: ["WooCommerce", "WordPress", "JavaScript", "CSS"],
    image: "/images/project-maariful.jpg",
    link: "#",
    categories: ["All Projects", "WordPress", "E-Commerce"],
  },
  {
    name: "Gadoon Textile",
    description:
      "Professional corporate website for textile manufacturer with product catalog and company profile.",
    tech: ["WordPress", "Bootstrap", "jQuery", "PHP"],
    image: "/images/project-gadoon.jpg",
    link: "#",
    categories: ["All Projects", "WordPress", "Custom Development"],
  },
  {
    name: "Rani Gift Center",
    description:
      "Vibrant e-commerce platform for a gift shop featuring product categories, wishlist, and secure checkout.",
    tech: ["WooCommerce", "WordPress", "Tailwind", "JS"],
    image: "/images/project-ranigift.jpg",
    link: "#",
    categories: ["All Projects", "WordPress", "E-Commerce"],
  },
  {
    name: "Mehran Group",
    description:
      "Multi-division corporate group website with dynamic content, portfolio showcase, and contact system.",
    tech: ["WordPress", "React", "Tailwind", "PHP"],
    image: "/images/project-mehran.jpg",
    link: "#",
    categories: ["All Projects", "WordPress", "Custom Development"],
  },
]

export function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("All Projects")
  const [animating, setAnimating] = useState(false)
  const { ref, isVisible } = useAnimateOnScroll()

  const filteredProjects = projects.filter((p) =>
    p.categories.includes(activeTab)
  )

  const handleTabChange = (tab: ProjectCategory) => {
    if (tab === activeTab) return
    setAnimating(true)
    setTimeout(() => {
      setActiveTab(tab)
      setAnimating(false)
    }, 300)
  }

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="My Work"
          title="Featured Projects"
          description="A selection of projects I have built for clients across various industries."
        />

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`group relative rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
              {/* Underline accent on hover/active */}
              <span
                className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                  activeTab === tab
                    ? "w-3/4"
                    : "w-0 group-hover:w-1/2"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-300 ${
            animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          } ${isVisible ? "translate-y-0" : "translate-y-10 opacity-0"}`}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(56,189,248,0.1)]"
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} website screenshot`}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay with buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/30">
                    <Code2 size={14} />
                    Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
