"use client";

import { useGetPopularCarList } from "@/app/lib/hooks";
import CarList from "..";
import CarListSkeleton from "../skeleton";

export default function PopularCarList() {
  const pageSize = 4;
  const { data, isLoading } = useGetPopularCarList(pageSize);

  let totalCars = data?.pages.flatMap((x) => x.data).length;
  totalCars = totalCars != null ? totalCars : pageSize;

  if (isLoading)
    return (
      <CarListSkeleton
        className="grid grid-cols-4 gap-8"
        totalCars={totalCars}
      />
    );

  return <CarList className="grid grid-cols-4 gap-8" data={data} />;
}
