import * as React from "react"
import { SVGProps } from "react"
const FieldIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px}"
        }
      </style>
    </defs>
    <path d="M6.27 1.5h15.27v17.18H6.27z" className="cls-1" />
    <path
      d="M17.73 18.68v3.82H2.46V5.32h3.81M9.14 6.27h9.54M9.14 10.09h9.54M9.14 13.91h5.72"
      className="cls-1"
    />
  </svg>
)
export default FieldIcon
