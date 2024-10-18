"use client";

import { useGetCarList } from "@/app/lib/hooks";
import PrimaryButton from "@/app/ui/buttons/primaryButton";
import CarList from "..";
import CarListSkeleton from "./skeleton";

export default function RecommendedCarList() {
  const popular = false;
  const { data, isFetching, fetchNextPage, hasNextPage } = useGetCarList(popular);

  const totalCars = data?.pages.flatMap((x) => x.data).length;

  if (isFetching) return <CarListSkeleton totalCars={totalCars} />;

  return (
    <div>
      <div className="flex place-content-between mb-8">
        <span className="text-secondary-300 font-semibold text-base">Recommended Cars</span>
      </div>
      <CarList data={data} />
      <div className="flex place-items-center pt-16">
        {hasNextPage && (
          <PrimaryButton
            size="lg"
            className="mx-auto"
            disabled={isFetching}
            onClick={() => fetchNextPage()}
          >
            Show more cars
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}
