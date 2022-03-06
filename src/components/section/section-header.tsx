import { Tag, TagLabel } from '../tag'
import { Typography } from '../typography/typography'

export interface SectionHeaderProps {
  title: string
  actionHref?: string
  actionLabel?: string
  actionHrefExternal?: boolean
  actionComponent?: any
  children?: React.ReactNode
  hasBetaTag?: boolean
}

export function SectionHeader(props: SectionHeaderProps) {
  const {
    title,
    actionHref,
    actionLabel,
    actionComponent: ActionComponent = 'a',
    actionHrefExternal = false,
    children,
    hasBetaTag,
  } = props

  return (
    <div>
      <div className="flex items-center justify-between relative">
        <Typography variant="h3" className="relative">
          {title}
          {hasBetaTag && (
            <Tag className="ml-2 align-middle">
              <TagLabel>Beta</TagLabel>
            </Tag>
          )}
        </Typography>
        {actionHref ? (
          <ActionComponent href={actionHref} target={actionHrefExternal ? '_blank' : null}>
            {actionLabel}
          </ActionComponent>
        ) : null}
      </div>
      {children}
    </div>
  )
}
