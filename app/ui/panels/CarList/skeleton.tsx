import ListItemSkeleton from "./listItemSkeleton";

interface CarListSkeletonProps {
  totalCars: number;
  title: string;
}

export default function CarListSkeleton({ totalCars, title }: CarListSkeletonProps) {
  return (
    <div>
      <div className="flex place-content-between mb-8">
        <span className="text-secondary-300 font-semibold text-base">{title}</span>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {[...Array(totalCars)].map((_, idx) => (
          <ListItemSkeleton key={idx} />
        ))}
      </div>
    </div>
  );
}
