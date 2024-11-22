import CheckIcon from "@/app/_components/icons/check";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  subLabel: number;
}

export default function Checkbox({
  id,
  disabled,
  label,
  subLabel,
  ...rest
}: CheckboxProps) {
  return (
    <div className="flex gap-x-2">
      <div className="relative flex place-items-center">
        <div className="relative me-5 flex">
          <input
            {...rest}
            type="checkbox"
            id={id}
            disabled={disabled}
            className="peer size-6 appearance-none rounded border-2 border-secondary-300 checked:border-transparent checked:bg-primary-500 disabled:border-gray-400"
          />
          <CheckIcon className="pointer-events-none absolute left-0 top-0 size-6 fill-transparent peer-checked:fill-white peer-checked:peer-disabled:fill-gray-400" />
        </div>
        <label
          htmlFor={id}
          className="text-start text-xl font-semibold text-secondary-400 hover:cursor-pointer"
        >
          {label} <span className="text-secondary-300">({subLabel})</span>
        </label>
      </div>
    </div>
  );
}
