import * as React from 'react'

import type { IllustrationProps } from 'typings/components'

function AwardAchievementIllustration(props: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 170 170"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      {...props}
    >
      <path fill="none" d="M0 0h170v170H0z" />
      <clipPath id="trophy_svg__a">
        <path d="M0 0h170v170H0z" />
      </clipPath>
      <g clipPath="url(#trophy_svg__a)">
        <circle cx={85} cy={85} r={85} fill="#FFFAF0" />
        <path
          d="M106.868 123c0-4.828-3.919-8.747-8.747-8.747H71.879c-4.828 0-8.747 3.919-8.747 8.747h43.736z"
          fill="#FBD38D"
        />
        <path d="M80.626 103.756V123h8.748v-19.244h-8.748z" fill="#FBD38D" />
        <clipPath id="trophy_svg__b">
          <path d="M45.638 61.77h17.494v17.494H45.638z" />
        </clipPath>
        <g clipPath="url(#trophy_svg__b)">
          <circle cx="63.132" cy="61.77" r="17.494" fill="#FBD38D" />
        </g>
        <clipPath id="trophy_svg__c">
          <path d="M106.868 61.77h17.494v17.494h-17.494z" />
        </clipPath>
        <g clipPath="url(#trophy_svg__c)">
          <circle cx="106.868" cy="61.77" r="17.494" fill="#FBD38D" />
        </g>
        <path
          d="M106.868 53.022H63.132v30.616c0 12.069 9.799 21.868 21.868 21.868 12.069 0 21.868-9.799 21.868-21.868V53.022z"
          fill="#ED8936"
        />
        <path
          d="M85 65.398l2.806 8.638h9.082l-7.347 5.338 2.806 8.637L85 82.673l-7.347 5.338 2.806-8.637-7.347-5.338h9.082L85 65.398z"
          fill="#fff"
        />
      </g>
    </svg>
  )
}

export default AwardAchievementIllustration
