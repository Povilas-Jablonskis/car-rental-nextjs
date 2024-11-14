import BasicInput from "../controls/basicInput";

interface DateTimeLocationPickerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export default function DateTimeLocationPicker({
  label,
  ...rest
}: DateTimeLocationPickerProps) {
  return (
    <div {...rest} className="grid gap-y-4 rounded-lg bg-white px-12 py-6">
      {label && (
        <label className="text-base font-semibold text-secondary-500">
          {label}
        </label>
      )}
      <div className="grid grid-flow-col divide-x divide-navbar/40 [&>*]:px-6 [&>:first-child]:ps-0 [&>:last-child]:pe-0">
        <BasicInput label="Locations" placeholder="Enter your city" />
        <BasicInput type="date" label="Date" placeholder="Select your date" />
        <BasicInput type="time" step={1} label="Time" />
      </div>
    </div>
  );
}
