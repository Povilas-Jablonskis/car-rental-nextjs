import { Control, Path, useController } from "react-hook-form";
import Checkbox, { CheckboxProps } from "../checkbox";

interface FormCheckboxProps<T extends object>
  extends Omit<CheckboxProps, "name" | "error"> {
  name: Path<T>;
  control: Control<T>;
}

export default function FormCheckbox<T extends object>({
  name,
  control,
  ...rest
}: FormCheckboxProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return <Checkbox {...rest} {...field} error={error} />;
}
