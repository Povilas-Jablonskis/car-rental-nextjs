import ListItemSkeleton from "./listItemSkeleton";

interface CarListSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  totalCars: number;
  title?: string;
}

export default function CarListSkeleton({
  totalCars,
  title,
  className,
  ...rest
}: CarListSkeletonProps) {
  return (
    <div>
      {title && (
        <div className="flex place-content-between mb-8">
          <span className="text-secondary-300 font-semibold text-base">{title}</span>
        </div>
      )}
      <div {...rest} className={className}>
        {[...Array(totalCars)].map((_, idx) => (
          <ListItemSkeleton key={idx} />
        ))}
      </div>
    </div>
  );
}
