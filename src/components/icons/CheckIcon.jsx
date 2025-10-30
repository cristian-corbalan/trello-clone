export default function CheckIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="icon icon-tabler icons-tabler-outline icon-tabler-check"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}
