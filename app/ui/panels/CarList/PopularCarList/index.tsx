import { fetchCars, ITEMS_PER_PAGE } from "@/app/lib/data";
import CarList from "..";

export default async function PopularCarList() {
  const cars = (await fetchCars()).filter((x) => x.popular);
  const filteredCars = cars.splice(0, ITEMS_PER_PAGE);

  return <CarList cars={filteredCars} />;
}
