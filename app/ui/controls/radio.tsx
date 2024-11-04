import clsx from "clsx";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Radio({ id, disabled, label, ...rest }: RadioProps) {
  return (
    <div className="flex gap-x-2">
      <div className="grid place-items-center">
        <input
          {...rest}
          type="radio"
          id={id}
          disabled={disabled}
          className="peer col-start-1 row-start-1 size-4 appearance-none rounded-full border border-secondary-300 bg-white checked:border-primary-500/30 checked:bg-primary-500/30 disabled:border-gray-400"
        />
        <div
          className={clsx(
            "pointer-events-none",
            "col-start-1 row-start-1",
            "size-2 rounded-full peer-checked:bg-primary-500",
            "peer-checked:peer-disabled:bg-gray-400",
          )}
        />
      </div>
      {label && (
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
