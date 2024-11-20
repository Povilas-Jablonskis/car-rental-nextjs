import { Control, Path } from "react-hook-form";
import Radio, { RadioProps } from "../radio";

interface FormRadioProps<T extends object>
  extends Omit<RadioProps, "name" | "error"> {
  name: Path<T>;
  control: Control<T>;
}

export default function FormRadio<T extends object>({
  name,
  control,
  ...rest
}: FormRadioProps<T>) {
  const field = control.register(name);

  return <Radio {...rest} {...field} />;
}
