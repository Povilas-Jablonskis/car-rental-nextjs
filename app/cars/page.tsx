import PrimaryButton from "../_components/buttons/primary";
import DateTimeLocationPicker from "../_components/dateTimeLocationPicker";
import SwapIcon from "../_components/icons/swap";
import CarList from "../_components/panels/CarList";

interface PageProps {
  searchParams: Promise<Record<string, string>>;
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;

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
          searchParams={resolvedSearchParams}
          categories={[]}
        />
      </div>
    </>
  );
}
