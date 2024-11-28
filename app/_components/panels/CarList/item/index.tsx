"use client";

import PrimaryButton from "@/app/_components/buttons/primary";
import Favourite from "@/app/_components/favourite";
import GearTypeIcon from "@/app/_components/icons/gearType";
import SeatsIcon from "@/app/_components/icons/seats";
import TankSizeIcon from "@/app/_components/icons/tankSize";
import formatNumber from "@/app/_helpers/formatNumber";
import { Cars } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CarProperty from "./carProperty";

interface CarListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  car: Cars;
  searchParams?: Record<string, string>;
}

export default function CarListItem({
  car,
  searchParams,
  ...rest
}: CarListItemProps) {
  const { push } = useRouter();

  return (
    <div {...rest} className="flex flex-col rounded-xl bg-white p-4 2xl:p-6">
      <div className="flex place-content-between">
        <span className="text-base font-bold text-secondary-500 sm:text-xl">
          {car.name}
        </span>
        <Favourite defaultFavourite={car.favourite} />
      </div>
      <span className="font-bold text-secondary-300">{car.type}</span>
      <div className="mb-11 mt-8 flex place-items-end sm:m-0 sm:flex-1 sm:flex-col sm:place-items-stretch">
        <Image
          priority
          width={0}
          height={0}
          className="m-auto max-h-16 w-auto sm:mb-11 sm:mt-8"
          src={car.image}
          alt="Car"
        />
        <div className="flex flex-col gap-y-4 sm:mb-6 sm:flex-row sm:place-content-between">
          <CarProperty icon={TankSizeIcon} label={`${car.fuelTank}L`} />
          <CarProperty icon={GearTypeIcon} label={car.gear} />
          <CarProperty
            icon={SeatsIcon}
            label={`${car.seats} ${car.seats > 1 ? "Persons" : "Person"}`}
          />
        </div>
      </div>
      <div className="flex place-content-between">
        <div className="grid place-content-center">
          <span className="text-base font-bold text-secondary-500 sm:text-xl">
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
