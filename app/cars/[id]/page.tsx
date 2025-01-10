import CarList from "@/app/_components/panels/CarList";
import CarListTitle from "@/app/_components/panels/CarList/title";
import { CarCategory } from "@prisma/client";
import { use } from "react";
import CarDetails from "./components/carDetails";

interface PageProps {
  searchParams: Promise<Record<string, string>>;
  params: Promise<{
    id: string;
  }>;
}

export default function Page({ searchParams, params }: PageProps) {
  const resolvedSearchParams = use(searchParams);
  const resolvedParams = use(params);

  return (
    <div className="grid gap-y-8 px-6 py-8 2xl:p-8">
      <CarDetails params={resolvedParams} />
      <CarList
        className="sm:grid-cols-2 xl:grid-cols-3"
        pageSize={3}
        categories={[CarCategory.Recent]}
      >
        <CarListTitle title="Recent Cars" searchParams={resolvedSearchParams} />
      </CarList>
      <CarList
        className="sm:grid-cols-2 xl:grid-cols-3"
        pageSize={3}
        categories={[CarCategory.Recommended]}
      >
        <CarListTitle title="Recommended Cars" />
      </CarList>
    </div>
  );
}
