"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56, 189, 248, ${p.opacity})`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x
          const dy = particles[j].y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.06 * (1 - dist / 150)})`
            ctx.stroke()
          }
        }
      })

      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-primary/8 blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="animate-slide-up">
          <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl text-balance">
            Muhammad{" "}
            <span className="text-primary">Khalid</span>
          </h1>
          <p className="mb-6 text-xl text-muted-foreground md:text-2xl text-pretty">
            Front-End Developer | WordPress Developer
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground/80 text-pretty">
            Crafting pixel-perfect, high-performance web experiences with modern
            technologies. Passionate about turning creative visions into
            functional digital realities.
          </p>

          {/* CTA Buttons */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="glass-card inline-flex items-center gap-2 rounded-lg px-8 py-3 font-medium text-foreground transition-all hover:border-primary/30"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-3 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-3 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:khalid@example.com"
              className="rounded-full p-3 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Down */}
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}
