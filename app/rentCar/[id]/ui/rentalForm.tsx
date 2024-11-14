import PrimaryButton from "@/app/ui/buttons/primaryButton";
import Checkbox from "@/app/ui/controls/checkbox";
import FormCheckbox from "@/app/ui/controls/Form/formCheckbox";
import FormInput from "@/app/ui/controls/Form/formInput";
import SecuritySafetyIcon from "@/app/ui/icons/securitySafety";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { rentCar } from "../actions";
import { FormSchema, formSchema, PaymentMethod } from "../types";
import BitcoinForm from "./paymentMethodsForms/bitcoinForm";
import CreditCardForm from "./paymentMethodsForms/creditCardForm";
import PayPalForm from "./paymentMethodsForms/payPalForm";
import RentalInfoPicker from "./rentalInfoPicker";

export default function RentalForm() {
  async function onSubmit(data: FormSchema) {
    await rentCar(data);
  }

  const methods = useForm<FormSchema>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: { paymentMethod: PaymentMethod.PayPal },
  });
  const { control, handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid flex-1 basis-[30%] gap-y-8 *:bg-white *:p-6"
      >
        <div>
          <p className="mb-1 text-xl font-bold text-secondary-500">
            Billing Info
          </p>
          <div className="mb-8 flex justify-between font-medium text-secondary-300">
            <p>Please enter your billing info</p>
            <p>Step 1 of 4</p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <FormInput
              name="customerName"
              label="Name"
              placeholder="Your name"
              control={control}
            />
            <FormInput
              name="customerTelNumber"
              type="tel"
              label="Phone Number"
              placeholder="Phone number"
              control={control}
            />
            <FormInput
              name="customerAddress"
              label="Address"
              placeholder="Address"
              control={control}
            />
            <FormInput
              name="customerTownCity"
              label="Town / City"
              placeholder="Town or city"
              control={control}
            />
          </div>
        </div>
        <div>
          <p className="mb-1 text-xl font-bold text-secondary-500">
            Rental Info
          </p>
          <div className="mb-8 flex justify-between font-medium text-secondary-300">
            <p>Please select your rental date</p>
            <p>Step 2 of 4</p>
          </div>
          <div className="grid gap-y-8">
            <RentalInfoPicker type="pickup" control={control} />
            <RentalInfoPicker type="dropoff" control={control} />
          </div>
        </div>
        <div>
          <p className="mb-1 text-xl font-bold text-secondary-500">
            Payment Method
          </p>
          <div className="mb-8 flex justify-between font-medium text-secondary-300">
            <p>Please enter your payment method</p>
            <p>Step 3 of 4</p>
          </div>
          <div className="grid gap-y-6">
            <CreditCardForm />
            <PayPalForm />
            <BitcoinForm />
          </div>
        </div>
        <div>
          <p className="mb-1 text-xl font-bold text-secondary-500">
            Confirmation
          </p>
          <div className="mb-8 flex justify-between font-medium text-secondary-300">
            <p>
              We are getting to the end. Just few clicks and your rental is
              ready!
            </p>
            <p>Step 4 of 4</p>
          </div>
          <div className="grid gap-y-6">
            <Checkbox
              id="agreeWithMarketing"
              label="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
              className="gap-x-[20px] rounded-lg bg-[#F6F7F9] px-8 py-4"
            />
            <FormCheckbox
              name="agreeWithTerms"
              id="agreeWithTerms"
              control={control}
              label="I agree with our terms and conditions and privacy policy."
              className="gap-x-[20px] rounded-lg bg-[#F6F7F9] px-8 py-4"
            />
            <PrimaryButton
              type="submit"
              size="lg"
              className="place-self-start !px-8 !py-4 !font-bold"
            >
              Rent Now
            </PrimaryButton>
            <div>
              <SecuritySafetyIcon className="mb-4" />
              <p className="mb-1 text-base font-semibold text-secondary-500">
                All your data are safe
              </p>
              <p className="font-medium text-secondary-300">
                We are using the most advanced security to provide you the best
                experience ever.
              </p>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
