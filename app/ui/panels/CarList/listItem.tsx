"use client";

import { Car } from "@/app/lib/definitions";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import PrimaryButton from "../../buttons/primaryButton";
import GearTypeIcon from "../../icons/gearType";
import HeartIcon from "../../icons/heart";
import SeatsIcon from "../../icons/seats";
import TankSizeIcon from "../../icons/tankSize";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  car: Car;
}

export default function ListItem({ car, ...rest }: DivProps) {
  const [favourite, setFavourite] = useState(false);

  return (
    <div {...rest} className="rounded-xl bg-white p-6">
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
        className="mx-auto my-16"
        priority
        src={car.image}
        alt="Car"
      />
      <div className="flex place-content-between mb-6">
        <div className="flex gap-1.5 items-center">
          <TankSizeIcon />
          <span className="text-secondary-300 font-medium">{car.fueltank}L</span>
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
        <div className="grid">
          <span className="text-xl text-secondary-500 font-bold">
            {car.price}/<span className="text-sm text-secondary-300 font-bold">day</span>
          </span>
          {car.oldprice != null && <s className="text-secondary-300 font-bold">{car.oldprice}</s>}
        </div>
        <PrimaryButton size="lg">Rent Now</PrimaryButton>
      </div>
    </div>
  );
}
