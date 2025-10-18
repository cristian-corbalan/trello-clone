import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} {...props} viewBox="0 0 24 24">
    <path
      fill="currentcolor"
      fillRule="evenodd"
      aria-hidden="true"
      d="m16.436 15.085 3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406M10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"
    />
  </svg>
);
export default SearchIcon;
