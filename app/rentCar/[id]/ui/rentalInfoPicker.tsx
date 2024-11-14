import FormInput from "@/app/ui/controls/Form/formInput";
import { Control } from "react-hook-form";
import { FormSchema } from "../types";

interface RentalInfoPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  control: Control<FormSchema>;
  type: "pickup" | "dropoff";
}

export default function RentalInfoPicker({
  control,
  type,
  ...rest
}: RentalInfoPickerProps) {
  return (
    <div {...rest} className="grid gap-y-4">
      <label className="text-base font-semibold text-secondary-500">
        {type === "dropoff" ? "Drop - Off" : "Pick - Up"}
      </label>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        <FormInput
          name={`${type}City`}
          label="Locations"
          placeholder="Enter your city"
          control={control}
        />
        <FormInput
          name={`${type}Date`}
          type="date"
          label="Date"
          placeholder="Select your date"
          control={control}
        />
        <FormInput
          name={`${type}Time`}
          type="time"
          step={1}
          label="Time"
          placeholder="Select your time"
          control={control}
        />
      </div>
    </div>
  );
}
