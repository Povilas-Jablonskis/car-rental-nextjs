import { PaymentMethod, PayPalFormSchema } from "@/app/rentCar/[id]/types";
import FormInput from "@/app/ui/controls/Form/formInput";
import FormRadio from "@/app/ui/controls/Form/formRadio";
import PayPalIcon from "@/app/ui/icons/payPal";
import { useFormContext } from "react-hook-form";

export default function PayPalForm(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  const { watch, control } = useFormContext<PayPalFormSchema>();

  const checked = watch("paymentMethod") === PaymentMethod.PayPal;

  return (
    <div {...props} className="grid gap-y-8 rounded-xl bg-[#F6F7F9] p-6">
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
        <div className="grid grid-cols-2">
          <FormInput
            name="email"
            type="email"
            label="E-mail"
            placeholder="E-mail"
            className="bg-white"
            control={control}
          />
        </div>
      )}
    </div>
  );
}
