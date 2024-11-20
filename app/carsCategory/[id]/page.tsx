import CarList from "@/app/ui/panels/CarList";
import CarListTitle from "@/app/ui/panels/CarList/title";
import { CarCategory } from "@prisma/client";
import CarDetails from "./ui/carDetails";

interface PageProps {
  searchParams: Promise<Record<string, string>>;
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ searchParams, params }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const resolvedParams = await params;

  return (
    <div className="grid gap-y-8">
      <CarDetails params={resolvedParams} />
      <CarList
        className="lg:grid-cols-2 xl:grid-cols-3"
        pageSize={3}
        categories={[CarCategory.Recent]}
      >
        <CarListTitle title="Recent Cars" searchParams={resolvedSearchParams} />
      </CarList>
      <CarList
        className="lg:grid-cols-2 xl:grid-cols-3"
        pageSize={3}
        categories={[CarCategory.Recommended]}
      >
        <CarListTitle title="Recommended Cars" />
      </CarList>
    </div>
  );
}
