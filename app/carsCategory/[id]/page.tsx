import CarList from "@/app/ui/panels/CarList";
import CarListTitle from "@/app/ui/panels/CarList/title";
import { CarCategory } from "@prisma/client";
import CarDetails from "./ui/carDetails";
import Reviews from "./ui/reviews";

interface PageProps {
  searchParams: Record<string, string>;
  params: {
    id: string;
  };
}

export default function Page({ searchParams, params }: PageProps) {
  return (
    <div className="grid gap-y-8">
      <CarDetails searchParams={searchParams} params={params} />
      <Reviews params={params} />
      <CarList
        className="grid-cols-3"
        pageSize={3}
        categories={[CarCategory.Recent]}
      >
        <CarListTitle title="Recent Cars" searchParams={searchParams} />
      </CarList>
      <CarList
        className="grid-cols-3"
        pageSize={3}
        categories={[CarCategory.Recommended]}
      >
        <CarListTitle title="Recommended Cars" />
      </CarList>
    </div>
  );
}
