import { fetchCars, ITEMS_PER_PAGE } from "@/app/lib/data";
import CarList from "..";
import ShowMoreLessButton from "../showMoreLessButton";

interface RecommendedCarListProps {
  showAllRecommendedCars: number;
}

export default async function RecommendedCarList({
  showAllRecommendedCars,
}: RecommendedCarListProps) {
  const cars = (await fetchCars()).filter((x) => !x.popular);
  const totalCars = cars.length;
  const itemsPerPage = showAllRecommendedCars ? totalCars : ITEMS_PER_PAGE;
  const filteredCars = cars.splice(0, itemsPerPage);

  return (
    <div>
      <CarList cars={filteredCars} />
      <div className="flex place-items-center pt-16">
        <ShowMoreLessButton showAllRecommendedCars={showAllRecommendedCars} />
        <span className="text-secondary-300 font-medium">
          {totalCars} {totalCars > 1 ? "cars" : "car"}
        </span>
      </div>
    </div>
  );
}
