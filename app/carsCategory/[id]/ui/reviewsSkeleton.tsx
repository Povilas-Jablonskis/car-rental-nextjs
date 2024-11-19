import ProfileIcon from "@/app/ui/icons/profile";
import React from "react";

interface ReviewsSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  pageSize: number;
}

export default function ReviewsSkeleton({ pageSize }: ReviewsSkeletonProps) {
  return (
    <div className="grid rounded-xl bg-white p-6">
      <div className="mb-8 flex gap-x-3">
        <div className="h-4 w-20 rounded-lg bg-primary-300 xl:w-28" />
        <div className="size-4 rounded-full bg-primary-300" />
      </div>
      <div className="grid gap-y-6">
        {[...Array(pageSize).keys()].map((x) => (
          <div key={x}>
            <div className="flex gap-x-4">
              <ProfileIcon />
              <div className="flex flex-1 flex-col">
                <div className="mb-2 flex place-content-between">
                  <div className="h-4 w-20 rounded-lg bg-primary-300 xl:w-28" />
                  <div className="h-4 w-20 rounded-lg bg-primary-skeleton xl:w-28" />
                </div>
                <div className="mb-6 flex place-content-between">
                  <div className="h-4 w-20 rounded-lg bg-primary-skeleton xl:w-28" />
                  <div className="h-4 w-20 rounded-lg bg-primary-300 xl:w-28" />
                </div>
                <div className="hidden h-16 rounded-3xl bg-primary-skeleton xl:block" />
              </div>
            </div>
            <div className="grid gap-y-2 xl:hidden">
              <div className="h-4 rounded-3xl bg-primary-skeleton" />
              <div className="h-4 rounded-3xl bg-primary-skeleton" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
