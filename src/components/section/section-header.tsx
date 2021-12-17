export interface SectionHeaderProps {
  title: string
  actionHref?: string
  actionLabel?: string
  actionHrefExternal?: boolean
  actionComponent?: any
}

export function SectionHeader(props: SectionHeaderProps) {
  const { title, actionHref, actionLabel, actionComponent: ActionComponent = 'a', actionHrefExternal = false } = props

  return (
    <div className="flex items-center justify-between">
      <h3 className="mb-0">{title}</h3>
      {actionHref ? (
        <ActionComponent href={actionHref} target={actionHrefExternal ? '_blank' : null}>
          {actionLabel}
        </ActionComponent>
      ) : null}
    </div>
  )
}
