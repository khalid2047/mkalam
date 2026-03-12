"use client"

import { SectionHeader } from "./section-header"
import { Code2, Zap, FileCode, Wrench, ShoppingCart } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const services = [
  {
    icon: Code2,
    title: "WordPress Development",
    description:
      "Custom WordPress themes and plugins tailored to your brand. Fully responsive, SEO-friendly, and built to scale.",
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    description:
      "Boost your website performance with advanced caching, code minification, image optimization, and server tuning.",
  },
  {
    icon: FileCode,
    title: "PSD/Figma to WordPress",
    description:
      "Pixel-perfect conversion of your design files into fully functional, responsive WordPress websites.",
  },
  {
    icon: Wrench,
    title: "Bug Fixing & Maintenance",
    description:
      "Reliable website maintenance, security updates, bug fixes, and ongoing technical support for your web projects.",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Setup",
    description:
      "Complete e-commerce store setup with WooCommerce, payment gateways, product management, and shipping configuration.",
  },
]

export function Services() {
  const { ref, isVisible } = useAnimateOnScroll()

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="What I Offer"
          title="My Services"
          description="Professional web development services to bring your vision to life."
        />

        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="glass-card neon-border group rounded-xl p-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(56,189,248,0.08)]"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon size={26} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
