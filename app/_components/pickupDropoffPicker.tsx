import clsx from "clsx";
import PrimaryButton from "./buttons/primary";
import DateTimeLocationPicker from "./dateTimeLocationPicker";
import SwapIcon from "./icons/swap";

interface PickupDropoffPickerProps {
  breakpoint: "lg" | "xl";
}

export default function PickupDropoffPicker({
  breakpoint,
}: PickupDropoffPickerProps) {
  return (
    <div
      className={clsx(
        "mb-9 grid gap-8",
        { "lg:grid-cols-[1fr_max-content_1fr] lg:gap-11": breakpoint === "lg" },
        { "xl:grid-cols-[1fr_max-content_1fr] xl:gap-11": breakpoint === "xl" },
      )}
    >
      <DateTimeLocationPicker label="Pick - Up" />
      <PrimaryButton className="place-self-center !p-4 shadow-[0_0_50px_11px_rgba(16,50,147,0.28)]">
        <SwapIcon />
      </PrimaryButton>
      <DateTimeLocationPicker label="Drop - Off" />
    </div>
  );
}
