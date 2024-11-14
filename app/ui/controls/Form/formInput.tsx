import { Control, Path, useController } from "react-hook-form";
import Input, { InputProps } from "../input";

interface FormInputProps<T extends object>
  extends Omit<InputProps, "name" | "error"> {
  name: Path<T>;
  control: Control<T>;
}

export default function FormInput<T extends object>({
  name,
  control,
  ...restProps
}: FormInputProps<T>) {
  const {
    field: { value, ...restField },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Input
      {...restProps}
      {...restField}
      value={value != null ? value : ""}
      error={error}
    />
  );
}
