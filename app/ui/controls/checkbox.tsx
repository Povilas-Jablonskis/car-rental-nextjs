import clsx from "clsx";
import CheckIcon from "../icons/check";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: React.ReactNode;
}

export default function Checkbox({
  id,
  disabled,
  label,
  children,
  className,
  ...rest
}: CheckboxProps) {
  return (
    <div className={clsx("flex gap-x-2", className)}>
      <div className="grid place-items-center">
        <input
          {...rest}
          type="checkbox"
          id={id}
          disabled={disabled}
          className="peer col-start-1 row-start-1 size-6 appearance-none rounded border border-secondary-300 checked:border-transparent checked:bg-primary-500 disabled:border-gray-400"
        />
        <CheckIcon
          className={clsx(
            "pointer-events-none",
            "col-start-1 row-start-1",
            "fill-transparent peer-checked:fill-white",
            "peer-checked:peer-disabled:fill-gray-400",
          )}
        />
      </div>
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
  );
}
