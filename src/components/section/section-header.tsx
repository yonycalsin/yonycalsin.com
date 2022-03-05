import { Typography } from '../typography/typography'

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
      <Typography variant="h3">{title}</Typography>
      {actionHref ? (
        <ActionComponent href={actionHref} target={actionHrefExternal ? '_blank' : null}>
          {actionLabel}
        </ActionComponent>
      ) : null}
    </div>
  )
}
