import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="1em"
        height="1em"
        {...props}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={18}
            d="M200 56 56 200M200 200 56 56"
        />
    </svg>
)
export default SvgComponent
