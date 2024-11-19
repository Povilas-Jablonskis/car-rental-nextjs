import { CCFormSchema, PaymentMethod } from "@/app/rentCar/[id]/types";
import FormInput from "@/app/ui/controls/Form/formInput";
import FormRadio from "@/app/ui/controls/Form/formRadio";
import VisaMastercardIcon from "@/app/ui/icons/visaMastercard";
import { useFormContext } from "react-hook-form";
import CardNumberInput from "./cardNumberInput";

export default function CreditCardForm(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  const { control, watch } = useFormContext<CCFormSchema>();

  const checked = watch("paymentMethod") === PaymentMethod.CC;

  return (
    <div
      {...props}
      className="grid gap-y-5 rounded-xl bg-background p-4 xl:gap-y-8 xl:p-6"
    >
      <div className="flex justify-between">
        <FormRadio
          name="paymentMethod"
          id="creditCardRadio"
          label="Credit Card"
          value={PaymentMethod.CC}
          control={control}
        />
        <VisaMastercardIcon />
      </div>
      {checked && (
        <div className="grid gap-x-8 gap-y-5 lg:grid-cols-2 xl:gap-y-6">
          <CardNumberInput
            name="cardNumber"
            label="Card Number"
            placeholder="Card number"
            inverted
            control={control}
          />
          <FormInput
            name="expirationDate"
            type="date"
            label="Expration Date"
            placeholder="DD / MM / YY"
            inverted
            control={control}
          />
          <FormInput
            name="cardHolder"
            label="Card Holder"
            placeholder="Card holder"
            inverted
            control={control}
          />
          <FormInput
            name="cvc"
            type="number"
            label="CVC"
            placeholder="CVC"
            inverted
            control={control}
          />
        </div>
      )}
    </div>
  );
}
