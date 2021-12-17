export interface SectionProps {
  children: React.ReactNode
}

export function Section(props: SectionProps) {
  const { children } = props

  return <section className="mt-3 md:mt-5">{children}</section>
}
