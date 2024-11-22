import NegativeReviewIcon from "@/app/_components/icons/negativeReview";
import PositiveReviewIcon from "@/app/_components/icons/positiveReview";
import { Reviews } from "@prisma/client";
import Image from "next/image";

interface ReviewProps extends React.HTMLAttributes<HTMLDivElement> {
  review: Reviews;
}

export default function Review({ review }: ReviewProps) {
  return (
    <div className="flex gap-x-4">
      <Image
        priority
        width={0}
        height={0}
        className="size-11 self-start sm:size-14"
        src={review.image}
        alt="Profile picture"
      />
      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex place-content-between">
          <span className="text-base font-semibold text-secondary-500 sm:text-xl sm:font-bold">
            {review.name}
          </span>
          <span className="text-end font-medium text-secondary-300">
            {new Date(review.date).toDateString()}
          </span>
        </div>
        <div className="mb-3 flex place-content-between">
          <span className="font-medium text-secondary-300">
            {review.workplace}
          </span>
          <div className="flex gap-x-0.5">
            {[...Array(5).keys()].map((x) =>
              x < review.score ? (
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
        </div>
        <p className="text-secondary-400">{review.description}</p>
      </div>
    </div>
  );
}
