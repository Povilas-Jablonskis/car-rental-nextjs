import { Car } from "@/app/lib/definitions";
import ListItem from "./listItem";

interface CarListProps {
  cars: Car[];
}

export default function CarList({ cars }: CarListProps) {
  return (
    <div className="grid grid-cols-4 gap-8">
      {cars.map((car) => (
        <ListItem key={car.id} car={car} />
      ))}
    </div>
  );
}
