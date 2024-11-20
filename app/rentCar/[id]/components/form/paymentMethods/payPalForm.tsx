import FormInput from "@/app/_components/controls/Form/input";
import FormRadio from "@/app/_components/controls/Form/radio";
import PayPalIcon from "@/app/_components/icons/payPal";
import { PaymentMethod, PayPalFormSchema } from "@/app/rentCar/[id]/types";
import { useFormContext } from "react-hook-form";

export default function PayPalForm(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  const { watch, control } = useFormContext<PayPalFormSchema>();

  const checked = watch("paymentMethod") === PaymentMethod.PayPal;

  return (
    <div
      {...props}
      className="grid gap-y-5 rounded-xl bg-background p-4 xl:gap-y-8 xl:p-6"
    >
      <div className="flex justify-between">
        <FormRadio
          name="paymentMethod"
          id="payPalRadio"
          label="PayPal"
          value={PaymentMethod.PayPal}
          control={control}
        />
        <PayPalIcon />
      </div>
      {checked && (
        <FormInput
          name="email"
          type="email"
          label="E-mail"
          placeholder="E-mail"
          inverted
          control={control}
        />
      )}
    </div>
  );
}
