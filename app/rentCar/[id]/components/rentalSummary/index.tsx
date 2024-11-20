import Input from "@/app/_components/controls/input";
import NegativeReviewIcon from "@/app/_components/icons/negativeReview";
import PositiveReviewIcon from "@/app/_components/icons/positiveReview";
import formatNumber from "@/app/_helpers/formatNumber";

import { Prisma } from "@prisma/client";
import Image from "next/image";

interface RentalSummaryProps {
  data: Prisma.CarsGetPayload<{
    include: {
      reviews: true;
    };
  }>;
}

export default function RentalSummary({ data }: RentalSummaryProps) {
  const score = Math.round(
    data.reviews.reduce((prev, curr) => prev + curr.score, 0) /
      data.reviews.length,
  );

  return (
    <div className="row-start-1 rounded-xl bg-white p-4 lg:row-auto lg:self-start 2xl:p-6">
      <div className="grid gap-y-1 pb-6 2xl:pb-8">
        <p className="text-base font-bold text-secondary-500 2xl:text-xl">
          Rental Summary
        </p>
        <p className="font-medium text-secondary-300">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </div>
      <div className="flex place-items-center gap-x-4 border border-transparent border-b-navbar/40 pb-6 2xl:pb-8">
        <Image
          priority
          width={0}
          height={0}
          className="me-4 h-20 w-28 lg:h-28 lg:w-32"
          src={data.image}
          alt="Car"
        />
        <div className="grid gap-y-3">
          <div className="text-xl font-bold text-secondary-500 2xl:text-2base">
            {data.name}
          </div>
          <div className="flex flex-col gap-x-2 gap-y-1 2xl:flex-row">
            <div className="flex gap-x-0.5">
              {[...Array(5).keys()].map((x) =>
                x < score ? (
                  <PositiveReviewIcon
                    className="size-3 2xl:size-5"
                    key={`${x}Positive`}
                  />
                ) : (
                  <NegativeReviewIcon
                    className="size-3 2xl:size-5"
                    key={`${x}Negative`}
                  />
                ),
              )}
            </div>
            <span className="font-medium text-secondary-400">
              {data.reviews.length} Reviewers
            </span>
          </div>
        </div>
      </div>
      <div className="flex place-items-center justify-between gap-y-2 pt-4 2xl:pt-8">
        <span className="text-xs font-semibold text-secondary-300 2xl:text-base 2xl:font-medium">
          Subtotal
        </span>
        <span className="text-base font-semibold text-secondary-500">
          {formatNumber(data.price)}
        </span>
      </div>
      <div className="flex place-items-center justify-between gap-y-2 pt-3 2xl:pt-6">
        <span className="text-xs font-semibold text-secondary-300 2xl:text-base 2xl:font-medium">
          Tax
        </span>
        <span className="text-base font-semibold text-secondary-500">
          {formatNumber(new Prisma.Decimal(0))}
        </span>
      </div>
      <div className="mt-6 flex justify-between rounded bg-background px-5 py-2.5 lg:mt-8 2xl:px-8 2xl:py-4">
        <Input placeholder="Apply promo code" className="!rounded-none !p-0" />
        <button
          type="button"
          className="my-auto text-xs font-semibold text-secondary-500 2xl:text-base"
        >
          Apply now
        </button>
      </div>
      <div className="flex justify-between pt-6 2xl:pt-8">
        <div className="grid gap-y-1">
          <span className="text-base font-bold text-secondary-500 2xl:text-xl">
            Total Rental Price
          </span>
          <span className="font-medium text-secondary-300">
            Overall price and includes rental discount
          </span>
        </div>
        <p className="my-auto text-xl font-bold text-secondary-500 2xl:text-2base">
          {formatNumber(data.price)}
        </p>
      </div>
    </div>
  );
}
