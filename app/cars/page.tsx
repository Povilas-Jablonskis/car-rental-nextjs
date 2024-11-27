import { use } from "react";
import CarList from "../_components/panels/CarList";
import PickupDropoffPicker from "../_components/pickupDropoffPicker";

interface PageProps {
  searchParams: Promise<Record<string, string>>;
}

export default function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = use(searchParams);

  return (
    <>
      <PickupDropoffPicker breakpoint="xl" />
      <div className="grid gap-y-8">
        <CarList
          className="sm:grid-cols-2 xl:grid-cols-3"
          pageSize={9}
          searchParams={resolvedSearchParams}
          categories={[]}
        />
      </div>
    </>
  );
}
