import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function PrimaryButton({
  children,
  className,
  size = "sm",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "rounded border border-transparent bg-primary-500 text-xs font-semibold text-white focus:border-primary-focused active:bg-primary-700 disabled:pointer-events-none disabled:opacity-40",
        { "px-4 py-[6px]": size === "sm" },
        { "px-4 py-[9px]": size === "md" },
        { "px-6 py-[14px]": size === "lg" },
        className,
      )}
    >
      {children}
    </button>
  );
}
