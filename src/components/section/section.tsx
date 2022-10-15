import type { SectionProps } from 'typings/components'

function Section(props: SectionProps) {
  const { children } = props

  return <section className="mt-6 md:mt-10">{children}</section>
}

export default Section
