"use client";

import { useGetCarList } from "@/app/lib/hooks";
import CarList from "..";
import CarListSkeleton from "./skeleton";

export default function PopularCarList() {
  const popular = true;
  const { data: cars, isFetching } = useGetCarList(popular);

  if (isFetching) return <CarListSkeleton />;

  return (
    <div>
      <div className="flex place-content-between mb-8">
        <span className="text-secondary-300 font-semibold text-base">Popular Cars</span>
        <button className="text-primary-500 font-semibold text-base text-end">View All</button>
      </div>
      <CarList data={cars} />
    </div>
  );
}
