"use client";

import { useGetPopularCarList } from "@/app/lib/hooks";
import CarList from "..";
import CarListSkeleton from "../skeleton";

export default function PopularCarList() {
  const title = "Popular Cars";
  const pageSize = 4;
  const { data, isFetching } = useGetPopularCarList(pageSize);

  let totalCars = data?.pages.flatMap((x) => x.data).length;
  totalCars = totalCars != null ? totalCars : pageSize;

  if (isFetching) return <CarListSkeleton totalCars={totalCars} title={title} />;

  return (
    <div>
      <div className="flex place-content-between mb-8">
        <span className="text-secondary-300 font-semibold text-base">{title}</span>
        <button className="text-primary-500 font-semibold text-base text-end">View All</button>
      </div>
      <CarList data={data} />
    </div>
  );
}
