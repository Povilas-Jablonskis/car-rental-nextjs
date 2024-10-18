import ListItemSkeleton from "../listItemSkeleton";

interface PopularCarListSkeletonProps {
  totalCars: number;
}

export default function PopularCarListSkeleton({ totalCars }: PopularCarListSkeletonProps) {
  return (
    <div>
      <div className="flex place-content-between mb-8">
        <span className="text-secondary-300 font-semibold text-base">Popular Cars</span>
        <button className="text-primary-500 font-semibold text-base text-end" disabled>
          View All
        </button>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {[...Array(totalCars)].map((_, idx) => (
          <ListItemSkeleton key={idx} />
        ))}
      </div>
    </div>
  );
}
