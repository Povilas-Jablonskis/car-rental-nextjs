import PrimaryButton from "../../../buttons/primaryButton";
import ListItemSkeleton from "../listItemSkeleton";

interface RecommendedCarListSkeletonProps {
  totalCars: number;
}

export default function RecommendedCarListSkeleton({ totalCars }: RecommendedCarListSkeletonProps) {
  return (
    <div>
      <div className="flex place-content-between mb-8">
        <span className="text-secondary-300 font-semibold text-base">Recommended Cars</span>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {[...Array(totalCars)].map((_, idx) => (
          <ListItemSkeleton key={idx} />
        ))}
      </div>
      <div className="flex place-items-center pt-16">
        <PrimaryButton size="lg" className="mx-auto" disabled>
          Show more cars
        </PrimaryButton>
      </div>
    </div>
  );
}
