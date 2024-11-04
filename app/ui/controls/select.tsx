import ArrowDownIcon from "../icons/arrowDown";

interface OptionExample {
  key: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  options?: OptionExample[];
}

export default function Select({
  label,
  placeholder,
  options,
  ...rest
}: SelectProps) {
  return (
    <div className="grid gap-y-2">
      {label && <label className="text-base font-bold">{label}</label>}
      <div className="flex items-center gap-x-2">
        <select
          {...rest}
          defaultValue=""
          className="cursor-pointer appearance-none bg-transparent text-xs font-medium text-secondary-300"
        >
          <option value="">{placeholder}</option>
          {options?.map(({ key, value }, idx) => (
            <option key={idx} value={key}>
              {value}
            </option>
          ))}
        </select>
        <ArrowDownIcon className="*:fill-secondary-500" />
      </div>
    </div>
  );
}
