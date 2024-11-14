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
    <div {...props} className="grid gap-y-8 rounded-xl bg-[#F6F7F9] p-6">
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
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <CardNumberInput
            name="cardNumber"
            label="Card Number"
            placeholder="Card number"
            className="bg-white"
            control={control}
          />
          <FormInput
            name="expirationDate"
            type="date"
            label="Expration Date"
            placeholder="DD / MM / YY"
            className="bg-white"
            control={control}
          />
          <FormInput
            name="cardHolder"
            label="Card Holder"
            placeholder="Card holder"
            className="bg-white"
            control={control}
          />
          <FormInput
            name="cvc"
            type="number"
            label="CVC"
            placeholder="CVC"
            className="bg-white"
            control={control}
          />
        </div>
      )}
    </div>
  );
}
