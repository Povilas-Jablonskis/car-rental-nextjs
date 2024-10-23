import clsx from "clsx";

export default function NavButton({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={clsx(
        "rounded-full border border-navbar/40 p-[9px]",
        className,
      )}
    >
      {children}
    </button>
  );
}
