"use client"

import { SectionHeader } from "./section-header"
import { ChevronRight, Clock, Code2, Layers } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const keyPoints = [
  {
    icon: Clock,
    title: "3+ Years Experience",
    description:
      "Building modern, responsive web applications with clean, maintainable code across diverse industries.",
  },
  {
    icon: Code2,
    title: "Frontend Specialist",
    description:
      "Expert in React, JavaScript, and modern CSS frameworks like Tailwind CSS and Bootstrap.",
  },
  {
    icon: Layers,
    title: "WordPress Expert",
    description:
      "Custom themes, plugins, WooCommerce stores, Shopify setups, and complete site builds.",
  },
]

export function About() {
  const { ref: sectionRef, isVisible } = useAnimateOnScroll()
  const { ref: imageRef, isVisible: imageVisible } = useAnimateOnScroll()

  return (
    <section id="about" className="relative py-24" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="About Me"
          title="Passionate Developer"
          description="Turning ideas into interactive, pixel-perfect digital experiences."
        />

        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          {/* Left Column - Image */}
          <div
            ref={imageRef}
            className={`relative overflow-hidden rounded-2xl transition-all duration-700 ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl border border-border/50">
              <img
                src="/images/about-portrait.jpg"
                alt="Muhammad Khalid - Front-End Developer"
                className="h-full w-full object-cover"
              />
              {/* Cyan accent glow */}
              <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-primary/20 blur-[60px]" />
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary/15 blur-[50px]" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`flex flex-col justify-center transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <p className="mb-6 leading-relaxed text-muted-foreground">
              I am a dedicated Front-End Developer with over 3 years of hands-on
              experience creating high-quality websites and web applications. My
              expertise lies in crafting responsive, performant user interfaces
              with modern frameworks and libraries.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              I specialize in WordPress development, custom theme building,
              WooCommerce integration, and translating design mockups from
              Figma/PSD into fully functional websites. I am passionate about
              clean code, pixel-perfect designs, and delivering exceptional user
              experiences.
            </p>

            {/* Key Points */}
            <div className="flex flex-col gap-4">
              {keyPoints.map((point) => (
                <div
                  key={point.title}
                  className="group flex cursor-default items-start gap-4 rounded-xl border border-transparent bg-secondary/30 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 hover:bg-secondary/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <point.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                  <ChevronRight
                    size={18}
                    className="mt-1 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
