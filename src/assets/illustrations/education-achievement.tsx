import * as React from 'react'

export function EducationAchievementIllustration(props: React.SVGProps<SVGSVGElement>) {
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
      <clipPath id="certificate_svg__a">
        <path d="M0 0h170v170H0z" />
      </clipPath>
      <g clipPath="url(#certificate_svg__a)">
        <circle cx={85} cy={85} r={85} fill="#F0FFF4" />
        <path fill="#68D391" d="M64.829 58h40v52.335h-40z" />
        <clipPath id="certificate_svg__b">
          <path d="M64.829 52h53.33v10h-53.33z" />
        </clipPath>
        <g clipPath="url(#certificate_svg__b)">
          <path
            d="M118.159 58.664A6.667 6.667 0 00111.495 52H71.492a6.667 6.667 0 00-6.663 6.664v6.672A6.667 6.667 0 0071.492 72h40.003a6.667 6.667 0 006.664-6.664v-6.672z"
            fill="#68D391"
          />
        </g>
        <clipPath id="certificate_svg__c">
          <path d="M51.5 107h53.33v10H51.5z" />
        </clipPath>
        <g clipPath="url(#certificate_svg__c)">
          <path
            d="M104.83 110.336A6.667 6.667 0 0198.166 117H58.164a6.667 6.667 0 01-6.664-6.664v-6.672A6.667 6.667 0 0158.164 97h40.002a6.667 6.667 0 016.664 6.664v6.672z"
            fill="#38A169"
          />
        </g>
        <clipPath id="certificate_svg__d">
          <path d="M91.5 107h13.33v10H91.5z" />
        </clipPath>
        <g clipPath="url(#certificate_svg__d)">
          <path
            d="M104.83 110.335c0 3.679-2.986 6.665-6.665 6.665s-6.665-2.986-6.665-6.665v-6.67c0-3.679 2.986-6.665 6.665-6.665s6.665 2.986 6.665 6.665v6.67z"
            fill="#68D391"
          />
        </g>
        <clipPath id="certificate_svg__e">
          <path d="M104.829 52h13.33v10h-13.33z" />
        </clipPath>
        <g clipPath="url(#certificate_svg__e)">
          <path
            d="M118.159 58.665A6.668 6.668 0 00111.494 52a6.668 6.668 0 00-6.665 6.665v6.67A6.668 6.668 0 00111.494 72a6.668 6.668 0 006.665-6.665v-6.67z"
            fill="#38A169"
          />
        </g>
        <path
          d="M84.829 71.194l2.806 8.637h9.082l-7.347 5.338 2.806 8.637-7.347-5.338-7.348 5.338 2.807-8.637-7.348-5.338h9.082l2.807-8.637z"
          fill="#fff"
        />
      </g>
    </svg>
  )
}
