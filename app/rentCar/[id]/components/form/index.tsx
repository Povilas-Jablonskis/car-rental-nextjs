import PrimaryButton from "@/app/_components/buttons/primary";
import CardNumberInput from "@/app/_components/controls/cardNumberInput";
import Checkbox from "@/app/_components/controls/checkbox";
import FormCheckbox from "@/app/_components/controls/Form/checkbox";
import FormInput from "@/app/_components/controls/Form/input";
import SecuritySafetyIcon from "@/app/_components/icons/securitySafety";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { rentCar } from "../../../../_lib/actions";
import { FormSchema, formSchema, PaymentMethod } from "../../types";
import PaymentMethodComponent from "./paymentMethod";
import RentalInfoPicker from "./rentalInfoPicker";
import FormSection from "./section";

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
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-8">
        <FormSection
          className="grid gap-5 gap-x-8 sm:grid-cols-2 sm:gap-y-6"
          title="Billing Info"
          subTitle="Please enter your billing info"
          step={1}
        >
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
        </FormSection>
        <FormSection
          className="grid gap-y-6 2xl:gap-y-8"
          title="Rental Info"
          subTitle="Please select your rental date"
          step={2}
        >
          <RentalInfoPicker type="pickup" />
          <RentalInfoPicker type="dropoff" />
        </FormSection>
        <FormSection
          className="grid gap-y-6"
          title="Payment Method"
          subTitle="Please enter your payment method"
          step={3}
        >
          <PaymentMethodComponent paymentMethod={PaymentMethod.CC}>
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
          </PaymentMethodComponent>
          <PaymentMethodComponent paymentMethod={PaymentMethod.PayPal}>
            <FormInput
              name="email"
              type="email"
              label="E-mail"
              placeholder="E-mail"
              inverted
              control={control}
            />
          </PaymentMethodComponent>
          <PaymentMethodComponent paymentMethod={PaymentMethod.Bitcoin}>
            <FormInput
              name="email"
              type="email"
              label="E-mail"
              placeholder="E-mail"
              inverted
              control={control}
            />
          </PaymentMethodComponent>
        </FormSection>
        <FormSection
          className="grid gap-y-5 2xl:gap-y-6"
          title="Confirmation"
          subTitle="We are getting to the end. Just few clicks and your rental is ready!"
          step={4}
        >
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
        </FormSection>
      </form>
    </FormProvider>
  );
}
