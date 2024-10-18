import Picker from "../controls/picker";
import Radio from "../controls/radio";
import Select from "../controls/select";

interface DateTimeLocationPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export default function DateTimeLocationPicker({ label, ...rest }: DateTimeLocationPickerProps) {
  return (
    <div {...rest} className="grid gap-y-4 bg-white rounded-lg py-6 px-12">
      <Radio id={label} label={label} />
      <div className="flex place-content-between [&>*:not(:first-child)]:ps-6 divide-x">
        <Select label="Locations" placeholder="Select your city" />
        <Picker type="date" label="Date" />
        <Picker type="time" label="Time" />
      </div>
    </div>
  );
}
