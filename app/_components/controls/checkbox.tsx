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
        <div className="relative me-4 flex xl:me-5">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            disabled={disabled}
            className="peer size-4 appearance-none rounded border-2 border-secondary-300 checked:border-transparent checked:bg-primary-500 disabled:border-gray-400 xl:size-6"
            {...rest}
          />
          <CheckIcon className="pointer-events-none absolute left-0 top-0 size-4 fill-transparent peer-checked:fill-white peer-checked:peer-disabled:fill-gray-400 xl:size-6" />
        </div>
        {children != null && children}
        {children == null && label && (
          <label
            htmlFor={id}
            className={clsx(
              "text-start text-xs font-medium hover:cursor-pointer xl:text-base xl:font-semibold",
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
