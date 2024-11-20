"use client";

import view from "@/public/images/View.jpg";
import view2 from "@/public/images/View2.jpg";
import { Prisma } from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface ImageSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  car: Prisma.CarsGetPayload<{
    include: {
      reviews: true;
    };
  }>;
}

export default function ImageSlider({ car }: ImageSliderProps) {
  const [selected, setSelected] = useState(0);

  const images = [car.image, view, view2];

  return (
    <div className="grid">
      <div className="mb-6">
        <Image
          priority
          width={0}
          height={0}
          className="h-60 w-full rounded-xl 2xl:h-96"
          src={images[selected]}
          alt="Big picture"
        />
      </div>
      <div className="grid grid-cols-3 gap-x-5 2xl:gap-x-6">
        {images.map((x, idx) => (
          <Image
            key={typeof x === "string" ? x : x.src}
            priority
            src={x}
            width={0}
            height={0}
            className={clsx("h-16 w-full rounded-xl 2xl:h-32", {
              "border-2 border-primary-500 p-1 2xl:p-2": selected === idx,
            })}
            alt="Small picture"
            onClick={() => setSelected(idx)}
          />
        ))}
      </div>
    </div>
  );
}
