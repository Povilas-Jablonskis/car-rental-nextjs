import formatNumber from "@/app/helpers/formatNumber";
import Input from "@/app/ui/controls/input";
import NegativeReviewIcon from "@/app/ui/icons/negativeReview";
import PositiveReviewIcon from "@/app/ui/icons/positiveReview";
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
    <div className="flex-1 bg-white p-6">
      <div className="grid gap-y-1 pb-8">
        <p className="text-xl font-bold text-secondary-500">Rental Summary</p>
        <p className="font-medium text-secondary-300">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </div>
      <div className="flex place-items-center gap-x-4 border border-transparent border-b-navbar/40 pb-8">
        <Image
          priority
          width={0}
          height={0}
          style={{ width: 132, height: 108 }}
          className="me-4"
          src={data.image}
          alt="Car"
        />
        <div className="grid gap-y-2">
          <div className="text-2base font-bold text-secondary-500">
            {data.name}
          </div>
          <div className="flex gap-x-2">
            <div className="flex gap-x-0.5">
              {[...Array(5)].map((_, idx) =>
                idx < score ? (
                  <PositiveReviewIcon key={idx} />
                ) : (
                  <NegativeReviewIcon key={idx} />
                ),
              )}
            </div>
            <span className="font-medium text-secondary-400">
              {data.reviews.length} Reviewers
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-y-2 pt-8">
        <span className="text-base font-medium text-secondary-300">
          Subtotal
        </span>
        <span className="text-base font-semibold text-secondary-500">
          {formatNumber(data.price)}
        </span>
      </div>
      <div className="flex justify-between gap-y-2 pt-6">
        <span className="text-base font-medium text-secondary-300">Tax</span>
        <span className="text-base font-semibold text-secondary-500">
          {formatNumber(new Prisma.Decimal(0))}
        </span>
      </div>
      <div className="mt-8 flex justify-between rounded bg-[#F6F7F9] px-8 py-4">
        <Input placeholder="Apply promo code" className="!rounded-none !p-0" />
        <button
          type="button"
          className="my-auto text-base font-semibold text-secondary-500"
        >
          Apply now
        </button>
      </div>
      <div className="flex justify-between pt-8">
        <div className="grid gap-y-1">
          <span className="text-xl font-bold text-secondary-500">
            Total Rental Price
          </span>
          <span className="font-medium text-secondary-300">
            Overall price and includes rental discount
          </span>
        </div>
        <p className="my-auto text-2base font-bold text-secondary-500">
          {formatNumber(data.price)}
        </p>
      </div>
    </div>
  );
}
