import clsx from "clsx";
import { forwardRef } from "react";

export default forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...rest }, ref) {
  return (
    <input
      ref={ref}
      {...rest}
      className={clsx(
        "rounded-xl bg-[#F6F7F9] px-8 py-4 font-medium text-secondary-400 placeholder:font-medium placeholder:text-secondary-300",
        className,
      )}
    />
  );
});
