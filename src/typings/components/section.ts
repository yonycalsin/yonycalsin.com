interface SectionProps {
  children: React.ReactNode
}

interface SectionHeaderProps {
  title: string
  className?: string
  actionHref?: string
  actionLabel?: string
  actionHrefExternal?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actionComponent?: any
  children?: React.ReactNode
}

export type { SectionHeaderProps, SectionProps }
