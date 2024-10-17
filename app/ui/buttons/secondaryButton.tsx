import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function SecondaryButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "active:bg-primary-100 border border-secondary-300 disabled:border-primary-100 hover:border-secondary-400 text-secondary-400 hover:text-secondary-500 active:text-secondary-500 focus:border-secondary-300 px-4 py-1.5 disabled:pointer-events-none rounded text-xs font-semibold",
        className
      )}
    >
      {children}
    </button>
  );
}
