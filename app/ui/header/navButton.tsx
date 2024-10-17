import clsx from "clsx";

export default function NavButton({ children, className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={clsx(
        "border border-navbar border-opacity-40 p-[9px] rounded-full",
        className
      )}
    >
      {children}
    </button>
  );
}
