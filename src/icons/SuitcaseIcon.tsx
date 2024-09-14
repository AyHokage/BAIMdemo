import * as React from "react"
import { SVGProps } from "react"
const SuitcaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#0F0F0F"
      fillRule="evenodd"
      d="M6 5V4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h2Zm2-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1H8V4Zm11.882 3H4.118l2.224 4.447a1 1 0 0 0 .894.553H11a1 1 0 1 1 2 0h3.764a1 1 0 0 0 .894-.553L19.882 7ZM11 14H7.236a3 3 0 0 1-2.683-1.658L3 9.236V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.236l-1.553 3.106A3 3 0 0 1 16.764 14H13a1 1 0 1 1-2 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SuitcaseIcon