import clsx from "clsx";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, ...rest },
  ref,
) {
  return (
    <div className="grid gap-y-4">
      {label && (
        <label className="text-base font-semibold text-secondary-500">
          {label}
        </label>
      )}
      <input
        ref={ref}
        {...rest}
        className={clsx(
          "rounded-xl bg-[#F6F7F9] px-8 py-4 font-medium text-secondary-400 placeholder:font-medium placeholder:text-secondary-300",
          className,
        )}
      />
    </div>
  );
});
