import clsx from "clsx";

export default function RentalCarButton({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={clsx(
        "hover:bg-transparent border border-transparent hover:border-white py-[10px] px-5 text-base font-semibold rounded",
        className
      )}
    >
      Rental Car
    </button>
  );
}
