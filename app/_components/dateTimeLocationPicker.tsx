import BasicInput from "./controls/basicInput";

interface DateTimeLocationPickerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export default function DateTimeLocationPicker({
  label,
  ...rest
}: DateTimeLocationPickerProps) {
  return (
    <div
      {...rest}
      className="grid gap-y-4 rounded-lg bg-white p-4 2xl:px-12 2xl:py-6"
    >
      {label && (
        <label className="text-base font-semibold text-secondary-500">
          {label}
        </label>
      )}
      <div className="grid gap-y-2 lg:grid-cols-3 lg:divide-x lg:divide-navbar/40 lg:[&>*]:px-6 lg:[&>:first-child]:ps-0 lg:[&>:last-child]:pe-0">
        <BasicInput label="Locations" placeholder="Enter your city" />
        <BasicInput type="date" label="Date" placeholder="Select your date" />
        <BasicInput type="time" step={1} label="Time" />
      </div>
    </div>
  );
}
