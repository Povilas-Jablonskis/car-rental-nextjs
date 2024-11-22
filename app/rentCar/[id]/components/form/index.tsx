import PrimaryButton from "@/app/_components/buttons/primary";
import Checkbox from "@/app/_components/controls/checkbox";
import FormCheckbox from "@/app/_components/controls/Form/checkbox";
import FormInput from "@/app/_components/controls/Form/input";
import SecuritySafetyIcon from "@/app/_components/icons/securitySafety";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { rentCar } from "../../../../_lib/actions";
import { FormSchema, formSchema, PaymentMethod } from "../../types";
import BitcoinForm from "./paymentMethods/bitcoinForm";
import CreditCardForm from "./paymentMethods/creditCardForm";
import PayPalForm from "./paymentMethods/payPalForm";
import RentalInfoPicker from "./rentalInfo";

export default function RentalForm() {
  async function onSubmit(data: FormSchema) {
    await rentCar(data);
  }

  const methods = useForm<FormSchema>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: { paymentMethod: PaymentMethod.CC },
  });
  const { control, handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-y-8 *:rounded-xl *:bg-white *:p-4 2xl:*:p-6"
      >
        <div>
          <div className="mb-6 flex justify-between font-medium text-secondary-300 2xl:mb-8">
            <div className="grid gap-y-1">
              <p className="text-base font-bold text-secondary-500 sm:text-xl">
                Billing Info
              </p>
              <p>Please enter your billing info</p>
            </div>
            <p className="sm:self-end">Step 1 of 4</p>
          </div>
          <div className="grid gap-5 gap-x-8 sm:grid-cols-2 sm:gap-y-6">
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
          <div className="mb-6 flex justify-between font-medium text-secondary-300 2xl:mb-8">
            <div className="grid gap-y-1">
              <p className="text-base font-bold text-secondary-500 sm:text-xl">
                Rental Info
              </p>
              <p>Please select your rental date</p>
            </div>
            <p className="sm:self-end">Step 2 of 4</p>
          </div>
          <div className="grid gap-y-6 2xl:gap-y-8">
            <RentalInfoPicker type="pickup" control={control} />
            <RentalInfoPicker type="dropoff" control={control} />
          </div>
        </div>
        <div>
          <div className="mb-6 flex justify-between font-medium text-secondary-300 2xl:mb-8">
            <div className="grid gap-y-1">
              <p className="text-base font-bold text-secondary-500 sm:text-xl">
                Payment Method
              </p>
              <p>Please enter your payment method</p>
            </div>
            <p className="sm:self-end">Step 3 of 4</p>
          </div>
          <div className="grid gap-y-6">
            <CreditCardForm />
            <PayPalForm />
            <BitcoinForm />
          </div>
        </div>
        <div>
          <div className="mb-6 grid grid-cols-[49%_auto] justify-between font-medium text-secondary-300 2xl:mb-8">
            <div className="grid gap-y-1">
              <p className="text-base font-bold text-secondary-500 sm:text-xl">
                Confirmation
              </p>
              <p>
                We are getting to the end. Just few clicks and your rental is
                ready!
              </p>
            </div>
            <div className="sm:self-end">Step 4 of 4</div>
          </div>
          <div className="grid gap-y-5 2xl:gap-y-6">
            <Checkbox
              id="agreeWithMarketing"
              label="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
              className="gap-x-5 rounded-lg bg-background px-4 py-2.5 2xl:px-8 2xl:py-4"
            />
            <FormCheckbox
              name="agreeWithTerms"
              id="agreeWithTerms"
              control={control}
              label="I agree with our terms and conditions and privacy policy."
              className="gap-x-5 rounded-lg bg-background px-4 py-2.5 2xl:px-8 2xl:py-4"
            />
          </div>
          <div className="mt-6 grid">
            <PrimaryButton
              type="submit"
              className="mb-8 place-self-start !px-8 !py-4 !font-bold"
            >
              Rent Now
            </PrimaryButton>
            <SecuritySafetyIcon className="mb-3 2xl:mb-4" />
            <p className="mb-1 text-base font-semibold text-secondary-500">
              All your data are safe
            </p>
            <p className="font-medium text-secondary-300">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
