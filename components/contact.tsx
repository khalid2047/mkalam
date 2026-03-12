"use client"

import { useState } from "react"
import { SectionHeader } from "./section-header"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+92 XXX XXXXXXX",
    href: "tel:+92XXXXXXXXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "khalid@example.com",
    href: "mailto:khalid@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: "#",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { ref, isVisible } = useAnimateOnScroll()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Get In Touch"
          title="Contact Me"
          description="Have a project in mind? Let's work together to bring your ideas to life."
        />

        <div
          ref={ref}
          className={`grid gap-10 md:grid-cols-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-6">
            <p className="leading-relaxed text-muted-foreground">
              I am always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through the form or via any of the channels below.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="glass-card group flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-card flex flex-col gap-5 rounded-xl p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
