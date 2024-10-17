interface PickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  type: "time" | "date";
}

export default function Picker({ label, ...rest }: PickerProps) {
  return (
    <div className="grid gap-y-2">
      <label className="font-bold text-base">{label}</label>
      <div>
        <input {...rest} className="text-secondary-300 font-medium text-xs" />
      </div>
    </div>
  );
}
