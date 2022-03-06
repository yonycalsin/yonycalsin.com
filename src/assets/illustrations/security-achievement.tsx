import * as React from 'react'

export function SecurityAchievementIllustration(props: React.SVGProps<SVGSVGElement>) {
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
      <clipPath id="lock_svg__a">
        <path d="M0 0h170v170H0z" />
      </clipPath>
      <g clipPath="url(#lock_svg__a)">
        <circle cx={85} cy={85} r={85} fill="#EBF8FF" />
        <path
          d="M85.129 46l.129.002.129.002.129.003.128.003.129.005.128.005.128.006.127.007.128.008.127.008.127.009.127.01.126.011.127.012.126.012.126.014.125.014.126.014.125.016.125.016.124.017.125.018.124.019.124.019.124.02.123.021.123.022.123.022.123.023.122.024.123.025.121.025.122.026.121.027.121.028.121.028.121.029.12.03.12.03.119.031.12.032.119.033.119.033.118.034.118.035.118.036.118.036.117.037.117.037.116.039.117.039.116.039.115.041.116.041.115.041.114.043.115.043.114.044.113.044.227.091.225.094.223.096.223.099.22.101.22.104.217.107.217.109.215.112.213.114.212.117.21.119.208.122.207.124.206.127.204.129.202.131.2.134.199.136.197.138.195.141.193.142.192.146.19.147.188.15.186.151.184.154.183.157.18.158.179.16.176.163.175.164.173.167.17.169.169.17.167.173.164.175.163.176.16.179.158.18.157.183.154.184.151.186.15.188.147.19.146.192.142.193.141.195.138.197.136.199.134.2.131.202.129.204.127.206.124.207.122.208.119.21.117.212.114.213.112.215.109.217.107.217.104.22.101.22.099.223.096.223.094.225.091.227.044.113.044.114.043.115.043.114.041.115.041.116.041.115.039.116.039.117.039.116.037.117.037.117.036.118.036.118.035.118.034.118.033.119.033.119.032.12.031.119.03.12.03.12.029.121.028.121.028.121.027.121.026.122.025.121.025.123.024.122.023.123.022.123.022.123.021.123.02.124.019.124.019.124.018.125.017.124.016.125.016.125.014.126.014.125.014.126.012.126.012.127.011.126.01.127.009.127.008.127.008.128.007.127.006.128.005.128.005.129.003.128.003.129.002.129.002.129V101H65V65.871l.002-.129.002-.129.003-.129.003-.128.005-.129.005-.128.006-.128.007-.127.008-.128.008-.127.009-.127.01-.127.011-.126.012-.127.012-.126.014-.126.014-.125.014-.126.016-.125.016-.125.017-.124.018-.125.019-.124.019-.124.02-.124.021-.123.022-.123.022-.123.023-.123.024-.122.025-.123.025-.121.026-.122.027-.121.028-.121.028-.121.029-.121.03-.12.03-.12.031-.119.032-.12.033-.119.033-.119.034-.118.035-.118.036-.118.036-.118.037-.117.037-.117.039-.116.039-.117.039-.116.041-.115.041-.116.041-.115.043-.114.043-.115.044-.114.044-.113.091-.227.094-.225.096-.223.099-.223.101-.22.104-.22.107-.217.109-.217.112-.215.114-.213.117-.212.119-.21.122-.208.124-.207.127-.206.129-.204.131-.202.134-.2.136-.199.138-.197.141-.195.142-.193.146-.192.147-.19.15-.188.151-.186.154-.184.157-.183.158-.18.16-.179.163-.176.164-.175.167-.173.169-.17.17-.169.173-.167.175-.164.176-.163.179-.16.18-.158.183-.157.184-.154.186-.151.188-.15.19-.147.192-.146.193-.142.195-.141.197-.138.199-.136.2-.134.202-.131.204-.129.206-.127.207-.124.208-.122.21-.119.212-.117.213-.114.215-.112.217-.109.217-.107.22-.104.22-.101.223-.099.223-.096.225-.094.227-.091.113-.044.114-.044.115-.043.114-.043.115-.041.116-.041.115-.041.116-.039.117-.039.116-.039.117-.037.117-.037.118-.036.118-.036.118-.035.118-.034.119-.033.119-.033.12-.032.119-.031.12-.03.12-.03.121-.029.121-.028.121-.028.121-.027.122-.026.121-.025.123-.025.122-.024.123-.023.123-.022.123-.022.123-.021.124-.02.124-.019.124-.019.125-.018.124-.017.125-.016.125-.016.126-.014.125-.014.126-.014.126-.012.127-.012.126-.011.127-.01.127-.009.127-.008.128-.008.127-.007.128-.006.128-.005.129-.005.128-.003.129-.003.129-.002.129-.002h.258zm-.195 10l-.065.001-.065.001-.067.001-.064.002-.065.003-.065.002-.064.003-.065.004-.065.004-.064.004-.063.005-.064.005-.063.005-.064.006-.063.006-.062.007-.064.007-.063.007-.062.008-.062.008-.063.008-.062.009-.062.01-.062.009-.062.01-.061.011-.061.01-.061.012-.061.011-.061.012-.06.012-.061.013-.061.013-.06.013-.06.014-.06.014-.06.014-.059.015-.059.015-.06.016-.06.016-.058.016-.059.016-.059.017-.059.017-.057.018-.059.018-.059.018-.058.019-.058.019-.057.019-.057.02-.058.02-.057.02-.056.021-.058.021-.057.021-.056.022-.042.017-.127.051-.112.046-.111.048-.11.049-.11.05-.11.052-.108.053-.108.055-.107.056-.106.057-.106.058-.105.06-.105.06-.103.062-.103.064-.102.065-.101.065-.1.067-.1.068-.099.07-.098.07-.097.072-.096.073-.096.074-.094.075-.094.076-.093.078-.092.079-.09.079-.09.081-.089.082-.088.083-.087.084-.086.085-.085.086-.084.087-.083.088-.082.089-.081.09-.079.09-.079.092-.077.093-.077.094-.075.094-.074.096-.073.096-.071.097-.071.098-.07.099-.068.1-.067.1-.066.101-.064.102-.064.103-.062.104-.061.104-.059.105-.058.106-.057.106-.056.107-.055.108-.053.109-.051.108-.051.111-.049.11-.048.111-.047.112-.05.126-.016.042-.023.057-.021.058-.021.056-.021.057-.02.057-.02.058-.02.058-.019.056-.019.058-.019.059-.018.058-.018.058-.018.059-.017.059-.017.057-.016.059-.017.06-.015.058-.016.061-.015.06-.015.058-.014.059-.014.062-.014.06-.013.059-.013.059-.013.062-.012.061-.012.062-.011.059-.011.061-.011.063-.011.06-.01.062-.009.063-.01.061-.008.061-.009.062-.008.064-.008.063-.007.062-.007.064-.007.061-.006.064-.006.063-.005.065-.006.063-.004.064-.004.064-.004.064-.004.065-.003.063-.002.066-.003.065-.002.065-.001.065-.001.065-.001.066V91h20V65.934l-.001-.066-.001-.065-.001-.065-.002-.066-.002-.064-.003-.064-.003-.065-.004-.065-.004-.064-.004-.064-.005-.064-.005-.063-.005-.063-.006-.065-.006-.064-.007-.063-.007-.062-.007-.062-.008-.063-.008-.062-.009-.064-.008-.061-.01-.061-.009-.063-.01-.062-.011-.061-.011-.062-.011-.061-.011-.06-.012-.061-.012-.061-.013-.06-.013-.059-.013-.063-.014-.06-.014-.058-.014-.06-.015-.061-.015-.06-.015-.057-.016-.06-.017-.06-.016-.057-.017-.061-.018-.058-.017-.058-.018-.058-.018-.058-.019-.059-.019-.056-.019-.058-.02-.058-.02-.058-.02-.057-.021-.057-.021-.058-.021-.056-.022-.056-.016-.042-.051-.127-.047-.112-.048-.111-.049-.111-.05-.109-.052-.109-.054-.109-.054-.108-.056-.107-.057-.106-.058-.106-.06-.106-.06-.103-.062-.104-.064-.102-.064-.102-.066-.102-.067-.1-.068-.1-.07-.099-.07-.098-.072-.097-.073-.096-.074-.096-.075-.094-.077-.094-.077-.093-.079-.091-.079-.091-.081-.09-.082-.089-.083-.088-.084-.087-.085-.086-.086-.085-.087-.084-.088-.083-.089-.082-.089-.08-.092-.08-.092-.079-.092-.077-.094-.077-.094-.075-.095-.074-.097-.073-.097-.072-.098-.07-.099-.069-.1-.069-.1-.067-.101-.066-.102-.064-.103-.063-.103-.063-.105-.061-.105-.059-.106-.058-.106-.057-.107-.056-.108-.055-.109-.053-.109-.051-.11-.051-.11-.049-.111-.048-.112-.046-.127-.052-.042-.016-.056-.022-.057-.021-.057-.021-.057-.021-.057-.02-.058-.02-.057-.02-.057-.019-.059-.019-.058-.019-.058-.018-.058-.018-.059-.018-.058-.017-.059-.017-.058-.016-.059-.016-.06-.016-.06-.016-.058-.015-.06-.015-.06-.014-.06-.014-.06-.014-.06-.013-.061-.013-.061-.013-.059-.012-.062-.012-.061-.011-.061-.012-.062-.01-.06-.011-.062-.01-.062-.009-.062-.01-.062-.009-.063-.008-.062-.008-.062-.008-.063-.007-.064-.007-.062-.007-.063-.006-.064-.006-.063-.005-.064-.005-.063-.005-.065-.004-.064-.004-.065-.004-.064-.003-.065-.002-.065-.003-.064-.002-.067-.001-.065-.001-.065-.001h-.132z"
          fill="#63B3ED"
        />
        <path
          d="M115 81c0-2.76-2.24-5-5-5H60c-2.76 0-5 2.24-5 5v30c0 2.76 2.24 5 5 5h50c2.76 0 5-2.24 5-5V81z"
          fill="#3182CE"
        />
        <path
          d="M85 83l2.806 8.637h9.082l-7.347 5.338 2.806 8.638L85 100.275l-7.347 5.338 2.806-8.638-7.347-5.338h9.082L85 83z"
          fill="#fff"
        />
      </g>
    </svg>
  )
}
