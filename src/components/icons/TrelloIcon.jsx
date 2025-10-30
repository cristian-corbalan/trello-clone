export default function TrelloIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height ?? 24}
      fill="none"
      {...props}
    >
      <rect x={2} y={2} width={(props.width ?? 24) - 4} height={(props.height ?? 24) - 4} fill="#fff" rx="4" />
      <g clipPath="url(#a)">
        <path
          fill="url(#b)"
          fillRule="evenodd"
          d="M20.958.19H3.218A2.766 2.766 0 0 0 .45 2.95v17.715a2.766 2.766 0 0 0 2.766 2.777h17.74a2.766 2.766 0 0 0 2.763-2.777V2.95A2.766 2.766 0 0 0 20.958.19ZM10.487 16.937a.924.924 0 0 1-.932.92H5.678a.92.92 0 0 1-.917-.92V5.401a.92.92 0 0 1 .917-.921h3.877a.924.924 0 0 1 .92.92l.011 11.538Zm8.946-5.297a.92.92 0 0 1-.932.92h-3.877a.925.925 0 0 1-.92-.92V5.4a.924.924 0 0 1 .92-.921h3.877a.92.92 0 0 1 .917.92l.015 6.24Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient id="b" x1={12.097} x2={12.097} y1={23.443} y2={0.189} gradientUnits="userSpaceOnUse">
          <stop stopColor="#0052CC" />
          <stop offset={1} stopColor="#2684FF" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M.234.092h24v24h-24z" />
        </clipPath>
      </defs>
    </svg>
  );
}
