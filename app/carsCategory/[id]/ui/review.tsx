import NegativeReviewIcon from "@/app/ui/icons/negativeReview";
import PositiveReviewIcon from "@/app/ui/icons/positiveReview";
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
        src={review.image}
        width={56}
        height={56}
        className="self-start"
        alt="Profile picture"
      />
      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex place-content-between">
          <span className="text-xl font-bold text-secondary-500">
            {review.name}
          </span>
          <span className="text-end text-sm font-medium text-secondary-300">
            {new Date(review.date).toDateString()}
          </span>
        </div>
        <div className="mb-3 flex place-content-between">
          <span className="text-sm font-medium text-secondary-300">
            {review.workplace}
          </span>
          <div className="flex gap-x-0.5">
            {[...Array(5)].map((_, idx) =>
              idx < review.score ? (
                <PositiveReviewIcon key={idx} />
              ) : (
                <NegativeReviewIcon key={idx} />
              ),
            )}
          </div>
        </div>
        <p className="text-sm text-secondary-400">{review.description}</p>
      </div>
    </div>
  );
}
