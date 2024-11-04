interface PickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function BasicInput({ label, ...rest }: PickerProps) {
  return (
    <div className="grid gap-y-2">
      {label && <label className="text-base font-bold">{label}</label>}
      <input
        {...rest}
        className="text-xs font-medium text-secondary-400 placeholder:font-medium placeholder:text-secondary-300"
      />
    </div>
  );
}
