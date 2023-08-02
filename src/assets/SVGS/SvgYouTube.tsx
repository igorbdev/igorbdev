import * as React from "react";
import { SVGProps } from "react";
const SvgYouTube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fill="#ccc"
      strokeMiterlimit={10}
      d="M15 4c-4.186 0-9.62 1.049-9.62 1.049l-.013.015A3.99 3.99 0 0 0 2 9v12.002a4 4 0 0 0 3.377 3.943l.004.006s5.433 1.051 9.619 1.051 9.62-1.05 9.62-1.05l.001-.003A4 4 0 0 0 28 21.002V9a4 4 0 0 0-3.377-3.945l-.004-.006S19.186 4 15 4zm-3 6.398L20 15l-8 4.602z"
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
      transform="scale(8.53333)"
    />
  </svg>
);
export default SvgYouTube;
