export default function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button
      className={
        'bg-blue-neutral-base hover:bg-blue-neutral-light text-black-neutral-base disabled:bg-black-neutral-lightest disabled:text-white-opacity-base cursor-pointer rounded-sm px-4 py-2 font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ' +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
