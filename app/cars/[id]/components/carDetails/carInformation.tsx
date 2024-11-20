"use client";

import PrimaryButton from "@/app/_components/buttons/primary";
import HeartIcon from "@/app/_components/icons/heart";
import NegativeReviewIcon from "@/app/_components/icons/negativeReview";
import PositiveReviewIcon from "@/app/_components/icons/positiveReview";
import formatNumber from "@/app/_helpers/formatNumber";

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
    <div
      {...rest}
      className="flex flex-col rounded-xl bg-white p-4 2xl:p-6 2xl:pb-8"
    >
      <div className="mb-2 flex place-content-between">
        <span className="text-xl font-bold text-secondary-500 2xl:text-2base">
          {car.name}
        </span>
        <button onClick={() => setFavourite((x) => !x)}>
          <HeartIcon
            className={clsx("hidden lg:block", {
              "*:fill-transparent *:stroke-secondary-300": !favourite,
            })}
          />
        </button>
      </div>
      <div className="flex place-items-center gap-x-2">
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
        <span className="font-medium text-secondary-300 xl:text-secondary-400">
          {car.reviews.length} Reviewers
        </span>
      </div>
      <div className="mt-4 text-xs leading-6 tracking-tighter text-secondary-300 2xl:mt-8 2xl:text-xl 2xl:font-bold 2xl:leading-10 2xl:text-secondary-400">
        {car.description}
      </div>
      <div className="my-8 grid gap-y-4">
        <div className="grid grid-cols-2 gap-x-11">
          <div className="flex justify-between">
            <span className="text-xs text-secondary-300 2xl:text-xl">
              Type Car
            </span>
            <span className="text-xs font-semibold text-secondary-500 xl:text-secondary-400 2xl:text-xl">
              {car.type}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-secondary-300 2xl:text-xl">
              Capacity
            </span>
            <span className="text-xs font-semibold text-secondary-500 xl:text-secondary-400 2xl:text-xl">
              {car.seats} {car.seats > 1 ? "Persons" : "Person"}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-11">
          <div className="flex justify-between">
            <span className="text-xs text-secondary-300 2xl:text-xl">
              Steering
            </span>
            <span className="text-xs font-semibold text-secondary-500 xl:text-secondary-400 2xl:text-xl">
              {car.gear}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-secondary-300 2xl:text-xl">
              Gasoline{" "}
            </span>
            <span className="text-xs font-semibold text-secondary-500 xl:text-secondary-400 2xl:text-xl">
              {car.fuelTank}L
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto flex place-content-between">
        <div className="grid place-content-center font-bold">
          <span className="text-xl text-secondary-500 xl:text-2sm">
            {formatNumber(car.price)}/
            <span className="text-xs text-secondary-300 xl:text-base">day</span>
          </span>
          {car.oldPrice != null && (
            <s className="text-xs text-secondary-300 xl:text-base">
              {formatNumber(car.oldPrice)}
            </s>
          )}
        </div>
        <PrimaryButton
          className="!px-8 !py-4 !font-bold"
          onClick={() => push(`/rentCar/${car.id}`)}
        >
          Rent Now
        </PrimaryButton>
      </div>
    </div>
  );
}
