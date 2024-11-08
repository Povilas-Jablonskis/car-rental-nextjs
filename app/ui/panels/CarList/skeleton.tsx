import ListItemSkeleton from "./listItemSkeleton";

interface CarListSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  totalCars: number;
}

export default function CarListSkeleton({
  totalCars,
  ...rest
}: CarListSkeletonProps) {
  return (
    <div {...rest}>
      {[...Array(totalCars).keys()].map((x) => (
        <ListItemSkeleton key={x} />
      ))}
    </div>
  );
}
