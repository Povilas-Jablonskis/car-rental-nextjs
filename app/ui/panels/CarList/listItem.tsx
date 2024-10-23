"use client";

import { Cars } from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import PrimaryButton from "../../buttons/primaryButton";
import GearTypeIcon from "../../icons/gearType";
import HeartIcon from "../../icons/heart";
import SeatsIcon from "../../icons/seats";
import TankSizeIcon from "../../icons/tankSize";

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  car: Cars;
}

const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function ListItem({ car, ...rest }: ListItemProps) {
  const [favourite, setFavourite] = useState(false);

  return (
    <div {...rest} className="flex min-h-96 flex-col rounded-xl bg-white p-6">
      <div className="flex place-content-between">
        <span className="text-xl font-bold text-secondary-500">{car.name}</span>
        <button onClick={() => setFavourite((x) => !x)}>
          <HeartIcon
            className={clsx({
              "*:fill-[#ED3F3F] *:stroke-[#ED3F3F]": favourite,
              "*:fill-transparent *:stroke-secondary-300": !favourite,
            })}
          />
        </button>
      </div>
      <span className="font-bold text-secondary-300">{car.type}</span>
      <Image
        width={0}
        height={0}
        style={{ width: "auto" }}
        className="m-auto"
        priority
        src={car.image}
        alt="Car"
      />
      <div className="mb-6 flex place-content-between">
        <div className="flex items-center gap-1.5">
          <TankSizeIcon />
          <span className="font-medium text-secondary-300">
            {car.fuelTank}L
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <GearTypeIcon />
          <span className="font-medium text-secondary-300">{car.gear}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <SeatsIcon />
          <span className="font-medium text-secondary-300">
            {car.seats} {car.seats > 1 ? "Persons" : "Person"}
          </span>
        </div>
      </div>
      <div className="flex place-content-between">
        <div className="grid place-content-center">
          <span className="text-xl font-bold text-secondary-500">
            {USDollar.format(+car.price)}/
            <span className="text-sm font-bold text-secondary-300">day</span>
          </span>
          {car.oldPrice != null && (
            <s className="font-bold text-secondary-300">
              {USDollar.format(+car.oldPrice)}
            </s>
          )}
        </div>
        <PrimaryButton size="lg">Rent Now</PrimaryButton>
      </div>
    </div>
  );
}
