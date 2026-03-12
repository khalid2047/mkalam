interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
        {label}
      </p>
      <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
          {description}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
    </div>
  )
}
