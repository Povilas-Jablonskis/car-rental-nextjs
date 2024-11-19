import { BitcoinFormSchema, PaymentMethod } from "@/app/rentCar/[id]/types";
import FormInput from "@/app/ui/controls/Form/formInput";
import FormRadio from "@/app/ui/controls/Form/formRadio";
import BitcoinIcon from "@/app/ui/icons/bitcoin";
import { useFormContext } from "react-hook-form";

export default function BitcoinForm(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  const { watch, control } = useFormContext<BitcoinFormSchema>();

  const checked = watch("paymentMethod") === PaymentMethod.Bitcoin;

  return (
    <div
      {...props}
      className="grid gap-y-5 rounded-xl bg-background p-4 xl:gap-y-8 xl:p-6"
    >
      <div className="flex justify-between">
        <FormRadio
          name="paymentMethod"
          id="bitcoinRadio"
          label="Bitcoin"
          value={PaymentMethod.Bitcoin}
          control={control}
        />
        <BitcoinIcon />
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
