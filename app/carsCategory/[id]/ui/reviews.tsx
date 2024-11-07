"use client";

import { useGetReviews, useGetReviewsTotals } from "@/app/lib/hooks";
import PrimaryButton from "@/app/ui/buttons/primaryButton";
import { Fragment } from "react";
import Review from "./review";
import ReviewsSkeleton from "./reviewsSkeleton";

interface ReviewsProps extends React.HTMLAttributes<HTMLDivElement> {
  params: {
    id: string;
  };
}

export default function Reviews({ params }: ReviewsProps) {
  const pageSize = 2;

  const { data: totalReviews, isLoading: totalReviewsIsLoading } =
    useGetReviewsTotals(params.id);

  const {
    data: reviews,
    isLoading: reviewsIsLoading,
    isFetchingNextPage: isFetchingNextReviewsPage,
    fetchNextPage: fetchNextReviewsPage,
    hasNextPage: hasNextReviewsPage,
  } = useGetReviews(pageSize, params.id);

  if (reviewsIsLoading || totalReviewsIsLoading)
    return <ReviewsSkeleton pageSize={pageSize} />;

  if (!totalReviews) return <></>;

  return (
    <div className="grid bg-white p-6">
      <div className="mb-8 flex gap-x-3">
        <div className="text-xl font-semibold text-secondary-500">Reviews</div>
        <div className="rounded bg-primary-500 px-3 py-1.5 text-sm font-bold text-white">
          {totalReviews}
        </div>
      </div>
      <div className="grid gap-y-6">
        {reviews?.pages.map((group, i) => (
          <Fragment key={i}>
            {group?.data.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </Fragment>
        ))}
      </div>
      {hasNextReviewsPage && (
        <PrimaryButton
          size="lg"
          className="mx-auto mt-6"
          disabled={isFetchingNextReviewsPage}
          onClick={() => fetchNextReviewsPage()}
        >
          Show more reviews
        </PrimaryButton>
      )}
    </div>
  );
}
