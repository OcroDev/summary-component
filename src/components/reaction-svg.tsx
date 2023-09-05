import * as React from "react"
import { SVGProps } from "react"
export const ReactionSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#F55"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
    />
  </svg>
)

