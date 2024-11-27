import NegativeReviewIcon from "./icons/negativeReview";
import PositiveReviewIcon from "./icons/positiveReview";

interface RatingProps {
  rating: number;
  reviewCount?: number;
}

export default function Rating({ rating, reviewCount }: RatingProps) {
  return (
    <>
      <div className="flex gap-x-0.5">
        {[...Array(5).keys()].map((x) =>
          x < rating ? (
            <PositiveReviewIcon
              className="size-3 sm:size-5"
              key={`${x}Positive`}
            />
          ) : (
            <NegativeReviewIcon
              className="size-3 sm:size-5"
              key={`${x}Negative`}
            />
          ),
        )}
      </div>
      {reviewCount != null && (
        <span className="font-medium text-secondary-300 sm:text-secondary-400">
          {reviewCount} Reviewers
        </span>
      )}
    </>
  );
}
