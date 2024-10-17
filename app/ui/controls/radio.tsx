import clsx from "clsx";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Radio({ id, disabled, label, ...rest }: RadioProps) {
  return (
    <div className="flex gap-2">
      <div className="grid place-items-center">
        <input
          {...rest}
          type="radio"
          id={id}
          disabled={disabled}
          className="
            peer
            col-start-1 row-start-1
            appearance-none
            w-4 h-4 bg-primary-500 bg-opacity-40 rounded-full
            disabled:border-gray-400
          "
        />
        <div
          className={clsx(
            "pointer-events-none",
            "col-start-1 row-start-1",
            "w-2 h-2 rounded-full peer-checked:bg-primary-500",
            "peer-checked:peer-disabled:bg-gray-400"
          )}
        />
      </div>
      <label
        htmlFor={id}
        className={clsx("text-start text-base font-semibold hover:cursor-pointer", {
          "text-gray-400": disabled,
        })}
      >
        {label}
      </label>
    </div>
  );
}
