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
          style={{ width: "100%" }}
          className="h-[360px] rounded-xl"
          src={images[selected]}
          alt="Profile picture"
        />
      </div>
      <div className="grid grid-cols-3 gap-x-6">
        {images.map((x, idx) => (
          <div
            key={idx}
            className={clsx("cursor-pointer rounded-xl", {
              "border-2 border-primary-500 p-2": selected == idx,
            })}
            onClick={() => setSelected(idx)}
          >
            <Image
              priority
              src={x}
              width={0}
              height={0}
              className="rounded-xl"
              style={{ height: selected == idx ? 108 : 124, width: "100%" }}
              alt="Profile picture"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
