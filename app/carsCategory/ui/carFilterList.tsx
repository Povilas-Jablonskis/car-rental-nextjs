"use client";

import { useGetCategoryCarList } from "@/app/lib/hooks";
import CarList from "../../ui/panels/CarList";
import CarListSkeleton from "../../ui/panels/CarList/skeleton";

interface CarFilterListProps {
  searchParams: Record<string, string>;
}

export default function CarFilterList({ searchParams }: CarFilterListProps) {
  const pageSize = 9;
  const { data, isLoading } = useGetCategoryCarList(pageSize, searchParams);

  let totalCars = data?.pages.flatMap((x) => x.data).length;
  totalCars = totalCars != null ? totalCars : pageSize;

  if (isLoading)
    return <CarListSkeleton className="grid grid-cols-3 gap-8" totalCars={totalCars} />;

  return <CarList className="grid grid-cols-3 gap-8" data={data} />;
}
