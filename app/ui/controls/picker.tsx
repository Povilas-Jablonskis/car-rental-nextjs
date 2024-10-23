interface PickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  type: "time" | "date";
}

export default function Picker({ label, ...rest }: PickerProps) {
  return (
    <div className="grid gap-y-2">
      <label className="text-base font-bold">{label}</label>
      <div>
        <input {...rest} className="text-xs font-medium text-secondary-300" />
      </div>
    </div>
  );
}
