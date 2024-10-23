import clsx from "clsx";
import { forwardRef } from "react";

export default forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...rest }, ref) {
    return (
      <input
        ref={ref}
        {...rest}
        className={clsx(
          "bg-[#F6F7F9] placeholder:text-secondary-300 py-4 px-8 placeholder:font-medium text-secondary-400 font-medium rounded-xl",
          className
        )}
      />
    );
  }
);
