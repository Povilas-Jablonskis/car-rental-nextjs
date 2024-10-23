import clsx from "clsx";

export default function RentalCarButton({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={clsx(
        "rounded border border-transparent px-5 py-[10px] text-base font-semibold hover:border-white hover:bg-transparent",
        className,
      )}
    >
      Rental Car
    </button>
  );
}
