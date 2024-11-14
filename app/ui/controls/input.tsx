import clsx from "clsx";
import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, error, ...rest },
  ref,
) {
  return (
    <div className="flex flex-col gap-y-4">
      {label && (
        <label className="text-base font-semibold text-secondary-500">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={clsx(
          "rounded-xl border bg-[#F6F7F9] px-8 py-4 font-medium text-secondary-400 placeholder:font-medium placeholder:text-secondary-300",
          className,
          { "border-transparent": !error },
          { "border-red-500": !!error },
        )}
        {...rest}
      />
      {!!error && (
        <label className="text-sm text-red-500">{error.message}</label>
      )}
    </div>
  );
});
