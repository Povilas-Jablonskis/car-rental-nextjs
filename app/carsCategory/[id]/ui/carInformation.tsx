"use client";

import formatNumber from "@/app/helpers/formatNumber";
import PrimaryButton from "@/app/ui/buttons/primaryButton";
import HeartIcon from "@/app/ui/icons/heart";
import NegativeReviewIcon from "@/app/ui/icons/negativeReview";
import PositiveReviewIcon from "@/app/ui/icons/positiveReview";
import { Prisma } from "@prisma/client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CarInformationProps extends React.HTMLAttributes<HTMLDivElement> {
  car: Prisma.CarsGetPayload<{
    include: {
      reviews: true;
    };
  }>;
}
export default function CarInformation({ car, ...rest }: CarInformationProps) {
  const { push } = useRouter();

  const [favourite, setFavourite] = useState(car.favourite);

  const score = Math.round(
    car.reviews.reduce((prev, curr) => prev + curr.score, 0) /
      car.reviews.length,
  );

  return (
    <div {...rest} className="flex flex-col rounded-xl bg-white p-6 pb-8">
      <div className="mb-2 flex place-content-between">
        <span className="text-2base font-bold text-secondary-500">
          {car.name}
        </span>
        <button onClick={() => setFavourite((x) => !x)}>
          <HeartIcon
            className={clsx({
              "*:fill-[#ED3F3F] *:stroke-[#ED3F3F]": favourite,
              "*:fill-transparent *:stroke-secondary-300": !favourite,
            })}
          />
        </button>
      </div>
      <div className="flex gap-x-2">
        <div className="flex gap-x-0.5">
          {[...Array(5).keys()].map((x) =>
            x < score ? (
              <PositiveReviewIcon key={`${x}Positive`} />
            ) : (
              <NegativeReviewIcon key={`${x}Negative`} />
            ),
          )}
        </div>
        <span className="font-medium text-secondary-400">
          {car.reviews.length} Reviewers
        </span>
      </div>
      <div className="mt-8 text-xl leading-10 tracking-tight text-secondary-400">
        {car.description}
      </div>
      <div className="mb-auto mt-8 grid gap-y-4">
        <div className="grid grid-cols-2 gap-x-11">
          <div className="flex justify-between">
            <span className="text-xl text-secondary-300">Type Car</span>
            <span className="text-xl font-semibold text-secondary-400">
              {car.type}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl text-secondary-300">Capacity</span>
            <span className="text-xl font-semibold text-secondary-400">
              {car.seats} {car.seats > 1 ? "Persons" : "Person"}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-11">
          <div className="flex justify-between">
            <span className="text-xl text-secondary-300">Steering</span>
            <span className="text-xl font-semibold text-secondary-400">
              {car.gear}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl text-secondary-300">Gasoline </span>
            <span className="text-xl font-semibold text-secondary-400">
              {car.fuelTank}L
            </span>
          </div>
        </div>
      </div>

      <div className="flex place-content-between">
        <div className="grid place-content-center font-bold">
          <span className="text-2sm text-secondary-500">
            {formatNumber(car.price)}/
            <span className="text-base text-secondary-300">day</span>
          </span>
          {car.oldPrice != null && (
            <s className="text-base text-secondary-300">
              {formatNumber(car.oldPrice)}
            </s>
          )}
        </div>
        <PrimaryButton
          size="lg"
          className="!px-8 !py-4 !font-bold"
          onClick={() => push(`/carsCategory/${car.id}`)}
        >
          Rent Now
        </PrimaryButton>
      </div>
    </div>
  );
}
