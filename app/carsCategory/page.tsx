import PrimaryButton from "../ui/buttons/primaryButton";
import SwapIcon from "../ui/icons/swap";
import CarList from "../ui/panels/CarList";
import DateTimeLocationPicker from "../ui/panels/dateTimeLocationPicker";

interface PageProps {
  searchParams: Record<string, string>;
}

export default function Page({ searchParams }: PageProps) {
  return (
    <>
      <div className="mb-9 grid gap-8 xl:grid-cols-[1fr_max-content_1fr] xl:gap-11">
        <DateTimeLocationPicker label="Pick - Up" />
        <PrimaryButton className="place-self-center !p-4 shadow-[0_0_50px_11px_rgba(16,50,147,0.28)]">
          <SwapIcon />
        </PrimaryButton>
        <DateTimeLocationPicker label="Drop - Off" />
      </div>
      <div className="grid gap-y-8">
        <CarList
          className="xl:grid-cols-3"
          pageSize={9}
          searchParams={searchParams}
          categories={[]}
        />
      </div>
    </>
  );
}
