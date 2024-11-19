import CarList from "@/app/ui/panels/CarList";
import CarListTitle from "@/app/ui/panels/CarList/title";
import { CarCategory } from "@prisma/client";
import CarDetails from "./ui/carDetails";

interface PageProps {
  searchParams: Record<string, string>;
  params: {
    id: string;
  };
}

export default function Page({ searchParams, params }: PageProps) {
  return (
    <div className="grid gap-y-8">
      <CarDetails params={params} />
      <CarList
        className="lg:grid-cols-2 xl:grid-cols-3"
        pageSize={3}
        categories={[CarCategory.Recent]}
      >
        <CarListTitle title="Recent Cars" searchParams={searchParams} />
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
