import React from "react";
import { SVGProps } from "react";

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}

const UploadFile: React.FC<SvgComponentProps> = ({ color, size, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...props}>
    <path d="M10 1a1 1 0 0 0-.707.293l-6 6A1 1 0 0 0 3 8v12a3 3 0 0 0 3 3h1a1 1 0 1 0 0-2H6a1 1 0 0 1-1-1V9h5a1 1 0 0 0 1-1V3h7a1 1 0 0 1 1 1v5a1 1 0 1 0 2 0V4a3 3 0 0 0-3-3h-8ZM9 7H6.414L9 4.414V7Zm5 8.5a2.5 2.5 0 0 1 5 0V17h1a2 2 0 1 1 0 4h-7a2 2 0 1 1 0-4h1v-1.5Zm2.5-4.5a4.5 4.5 0 0 0-4.484 4.122A4.002 4.002 0 0 0 13 23h7a4 4 0 0 0 .984-7.878A4.5 4.5 0 0 0 16.5 11Z" />
  </svg>
);

export default UploadFile;
