interface Props {
  children: React.ReactNode;
  className?: string;
  [x: string]: unknown;
}

const PrimaryButton: React.FC<Props> = ({ children, className, ...props }) => {
  let buttonClassName =
    "rounded-sm font-semibold bg-primary-blue text-primary-black py-2 px-4 brightness-on-event hover:cursor-pointer disabled:bg-tertiary-black disabled:opacity-80 disabled:cursor-not-allowed disabled:text-gray-400";

  if (className) {
    buttonClassName += className;
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
