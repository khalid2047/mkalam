import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6">
        <a href="#" className="font-mono text-lg font-bold text-primary">
          {"<MK />"}
        </a>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:khalid@example.com"
            className="rounded-full p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          {"© 2026 Muhammad Khalid. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
