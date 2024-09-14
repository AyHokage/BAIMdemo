import * as React from "react"
import { SVGProps } from "react"

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="1.5em" {...props} >
    <path
      fill="#f5f6fa"
      stroke="#ffffff" // Цвет границы
      strokeWidth="1" // Толщина границы
      d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
    />
    <path fill="none" d="M0 0h24v24H0V0z" />
  </svg>
) 

export default ArrowDown;