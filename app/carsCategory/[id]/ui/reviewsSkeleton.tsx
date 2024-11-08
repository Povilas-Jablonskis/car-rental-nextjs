import ProfileIcon from "@/app/ui/icons/profile";

interface ReviewsSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  pageSize: number;
}

export default function ReviewsSkeleton({ pageSize }: ReviewsSkeletonProps) {
  return (
    <div className="grid bg-white p-6">
      <div className="mb-8 flex gap-x-3">
        <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
        <div className="h-4 w-[15px] rounded-full bg-primary-300" />
      </div>
      <div className="grid gap-y-6">
        {[...Array(pageSize).keys()].map((x) => (
          <div key={x} className="flex gap-x-4">
            <ProfileIcon />
            <div className="flex flex-1 flex-col">
              <div className="mb-2 flex place-content-between">
                <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
                <div className="h-4 w-[116px] rounded-lg bg-[#EFF3FD]" />
              </div>
              <div className="mb-6 flex place-content-between">
                <div className="h-4 w-[116px] rounded-lg bg-[#EFF3FD]" />
                <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
              </div>
              <div className="h-[60px] rounded-3xl bg-[#EFF3FD]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
