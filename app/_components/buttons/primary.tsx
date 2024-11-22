import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function PrimaryButton({
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "rounded-md border border-transparent bg-primary-500 px-4 py-2 text-xs font-semibold text-white focus:border-primary-focused active:bg-primary-700 disabled:pointer-events-none disabled:opacity-40 sm:px-6 sm:py-3.5 sm:text-base",
        className,
      )}
    >
      {children}
    </button>
  );
}
