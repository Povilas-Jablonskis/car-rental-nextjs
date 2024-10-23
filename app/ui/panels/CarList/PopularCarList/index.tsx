"use client";

import { useGetPopularCarList } from "@/app/lib/hooks";
import { useRouter } from "next/navigation";
import CarList from "..";
import CarListSkeleton from "../skeleton";

export default function PopularCarList() {
  const title = "Popular Cars";
  const pageSize = 4;
  const { data, isLoading } = useGetPopularCarList(pageSize);
  const { push } = useRouter();

  let totalCars = data?.pages.flatMap((x) => x.data).length;
  totalCars = totalCars != null ? totalCars : pageSize;

  if (isLoading)
    return (
      <CarListSkeleton className="grid grid-cols-4 gap-8" totalCars={totalCars} title={title} />
    );

  return (
    <div>
      <div className="flex place-content-between mb-8">
        <span className="text-secondary-300 font-semibold text-base">{title}</span>
        <button
          className="text-primary-500 font-semibold text-base text-end"
          onClick={() => push("/carsCategory")}
        >
          View All
        </button>
      </div>
      <CarList className="grid grid-cols-4 gap-8" data={data} />
    </div>
  );
}
