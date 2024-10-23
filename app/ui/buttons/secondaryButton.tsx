import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function SecondaryButton({
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "rounded border border-secondary-300 px-4 py-1.5 text-xs font-semibold text-secondary-400 hover:border-secondary-400 hover:text-secondary-500 focus:border-secondary-300 active:bg-primary-100 active:text-secondary-500 disabled:pointer-events-none disabled:border-primary-100",
        className,
      )}
    >
      {children}
    </button>
  );
}
