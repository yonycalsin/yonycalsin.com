import { BsChevronCompactRight } from 'react-icons/bs'

import { Icon } from 'components/icon'

function BreadcrumbSeparator() {
  return (
    <span>
      <Icon>
        <BsChevronCompactRight />
      </Icon>
    </span>
  )
}

export default BreadcrumbSeparator
