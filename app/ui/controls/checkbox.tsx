import clsx from "clsx";
import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import CheckIcon from "../icons/check";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: React.ReactNode;
  error?: FieldError;
}

export default forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { id, disabled, label, children, error, className, ...rest },
  ref,
) {
  return (
    <div
      className={clsx(
        "flex gap-x-2 border",
        className,
        { "border-transparent": !error },
        { "border-red-500": !!error },
      )}
    >
      <div className="relative flex place-items-center">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          disabled={disabled}
          className="peer me-5 size-6 appearance-none rounded border border-secondary-300 checked:border-transparent checked:bg-primary-500 disabled:border-gray-400"
          {...rest}
        />
        <CheckIcon className="pointer-events-none absolute left-0.5 top-0.5 fill-transparent peer-checked:fill-white peer-checked:peer-disabled:fill-gray-400" />
        {children != null && children}
        {children == null && label && (
          <label
            htmlFor={id}
            className={clsx(
              "text-start text-base font-semibold hover:cursor-pointer",
              {
                "text-gray-400": disabled,
              },
            )}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  );
});
