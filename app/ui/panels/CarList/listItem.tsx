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
    <div {...rest} className="flex flex-col rounded-xl bg-white p-6 min-h-96">
      <div className="flex place-content-between">
        <span className="text-secondary-500 font-bold text-xl">{car.name}</span>
        <button onClick={() => setFavourite((x) => !x)}>
          <HeartIcon
            className={clsx({
              "*:fill-[#ED3F3F] *:stroke-[#ED3F3F]": favourite,
              "*:fill-transparent *:stroke-secondary-300": !favourite,
            })}
          />
        </button>
      </div>
      <span className="text-secondary-300 font-bold">{car.type}</span>
      <Image
        width={0}
        height={0}
        style={{ width: "auto" }}
        className="m-auto"
        priority
        src={car.image}
        alt="Car"
      />
      <div className="flex place-content-between mb-6">
        <div className="flex gap-1.5 items-center">
          <TankSizeIcon />
          <span className="text-secondary-300 font-medium">{car.fuelTank}L</span>
        </div>
        <div className="flex gap-1.5 items-center">
          <GearTypeIcon />
          <span className="text-secondary-300 font-medium">{car.gear}</span>
        </div>
        <div className="flex gap-1.5 items-center">
          <SeatsIcon />
          <span className="text-secondary-300 font-medium">
            {car.seats} {car.seats > 1 ? "Persons" : "Person"}
          </span>
        </div>
      </div>
      <div className="flex place-content-between">
        <div className="grid place-content-center">
          <span className="text-xl text-secondary-500 font-bold">
            {USDollar.format(+car.price)}/
            <span className="text-sm text-secondary-300 font-bold">day</span>
          </span>
          {car.oldPrice != null && (
            <s className="text-secondary-300 font-bold">{USDollar.format(+car.oldPrice)}</s>
          )}
        </div>
        <PrimaryButton size="lg">Rent Now</PrimaryButton>
      </div>
    </div>
  );
}
