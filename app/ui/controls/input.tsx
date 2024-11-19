import clsx from "clsx";
import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  inverted?: boolean;
}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, error, inverted, ...rest },
  ref,
) {
  return (
    <div className="flex flex-col gap-y-3 2xl:gap-y-4">
      {label && (
        <label className="text-sm font-semibold text-secondary-500 sm:text-base">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={clsx(
          "rounded-xl border px-8 py-4 font-medium text-secondary-400 placeholder:font-medium placeholder:text-secondary-300",
          className,
          { "border-transparent": !error },
          { "border-red-500": !!error },
          { "bg-background": !inverted },
          { "bg-white": inverted },
        )}
        {...rest}
      />
      {!!error && <label className="text-red-500">{error.message}</label>}
    </div>
  );
});
