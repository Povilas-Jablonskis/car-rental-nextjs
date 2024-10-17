import ArrowDownIcon from "../icons/arrowDown";

interface OptionExample {
  key: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  options?: Array<OptionExample>;
}

export default function Select({ label, placeholder, options, ...rest }: SelectProps) {
  return (
    <div className="grid gap-y-2">
      <label className="font-bold text-base">{label}</label>
      <div className="flex gap-x-2 items-center">
        <select
          {...rest}
          defaultValue=""
          className="text-secondary-300 font-medium text-xs bg-transparent appearance-none cursor-pointer"
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
