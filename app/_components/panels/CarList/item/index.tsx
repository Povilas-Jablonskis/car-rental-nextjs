"use client";

import PrimaryButton from "@/app/_components/buttons/primary";
import GearTypeIcon from "@/app/_components/icons/gearType";
import HeartIcon from "@/app/_components/icons/heart";
import SeatsIcon from "@/app/_components/icons/seats";
import TankSizeIcon from "@/app/_components/icons/tankSize";
import formatNumber from "@/app/_helpers/formatNumber";
import { Cars } from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  car: Cars;
  searchParams?: Record<string, string>;
}

export default function CarListItem({
  car,
  searchParams,
  ...rest
}: ListItemProps) {
  const { push } = useRouter();

  const [favourite, setFavourite] = useState(car.favourite);

  return (
    <div {...rest} className="flex flex-col rounded-xl bg-white p-4 2xl:p-6">
      <div className="flex place-content-between">
        <span className="text-base font-semibold text-secondary-500 xl:font-bold 2xl:text-xl">
          {car.name}
        </span>
        <button onClick={() => setFavourite((x) => !x)}>
          <HeartIcon
            className={clsx({
              "*:fill-transparent *:stroke-secondary-300": !favourite,
            })}
          />
        </button>
      </div>
      <span className="font-bold text-secondary-300">{car.type}</span>
      <div className="mb-11 mt-8 flex place-items-end xl:m-0 xl:flex-1 xl:flex-col xl:place-items-stretch">
        <Image
          priority
          width={0}
          height={0}
          className="m-auto max-h-16 w-auto md:max-w-40 xl:mb-11 xl:mt-8 xl:max-h-fit"
          src={car.image}
          alt="Car"
        />
        <div className="flex flex-col gap-y-4 xl:mb-6 xl:flex-row xl:place-content-between">
          <div className="flex items-center gap-x-1.5">
            <TankSizeIcon className="size-3.5 xl:size-6" />
            <span className="font-medium text-secondary-300">
              {car.fuelTank}L
            </span>
          </div>
          <div className="flex items-center gap-x-1.5">
            <GearTypeIcon className="size-3.5 xl:size-6" />
            <span className="font-medium text-secondary-300">{car.gear}</span>
          </div>
          <div className="flex items-center gap-x-1.5">
            <SeatsIcon className="size-3.5 xl:size-6" />
            <span className="font-medium text-secondary-300">
              {car.seats} {car.seats > 1 ? "Persons" : "Person"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex place-content-between">
        <div className="grid place-content-center">
          <span className="text-base font-bold text-secondary-500 2xl:text-xl">
            {formatNumber(car.price)}/
            <span className="font-bold text-secondary-300">day</span>
          </span>
          {car.oldPrice != null && (
            <s className="font-bold text-secondary-300">
              {formatNumber(car.oldPrice)}
            </s>
          )}
        </div>
        <PrimaryButton
          onClick={() =>
            push(
              `/cars/${car.id}?${new URLSearchParams(searchParams).toString()}`,
            )
          }
        >
          Rent Now
        </PrimaryButton>
      </div>
    </div>
  );
}
