"use client";

import { useGetReviews } from "@/app/lib/hooks";
import PrimaryButton from "@/app/ui/buttons/primaryButton";
import { Fragment } from "react";
import Review from "./review";
import ReviewsSkeleton from "./reviewsSkeleton";

interface ReviewsProps extends React.HTMLAttributes<HTMLDivElement> {
  params: {
    id: string;
  };
  totalReviews: number;
}

export default function Reviews({ params, totalReviews }: ReviewsProps) {
  const pageSize = 2;

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGetReviews(pageSize, params.id);

  if (isLoading) return <ReviewsSkeleton pageSize={pageSize} />;

  return (
    <div className="grid bg-white p-6">
      <div className="mb-8 flex gap-x-3">
        <div className="text-xl font-semibold text-secondary-500">Reviews</div>
        <div className="rounded bg-primary-500 px-3 py-1.5 text-sm font-bold text-white">
          {totalReviews}
        </div>
      </div>
      <div className="grid gap-y-6">
        {data?.pages.map((group) => (
          <Fragment key={JSON.stringify(group)}>
            {group?.data.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </Fragment>
        ))}
      </div>
      {hasNextPage && (
        <PrimaryButton
          size="lg"
          className="mx-auto mt-6"
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          Show more reviews
        </PrimaryButton>
      )}
    </div>
  );
}
