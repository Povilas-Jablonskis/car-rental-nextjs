"use client";

import { useGetCar } from "@/app/lib/hooks";
import CarDetailsSkeleton from "./carDetailsSkeleton";
import CarInformation from "./carInformation";
import ImageSlider from "./imageSlider";

interface CarDetailsProps {
  searchParams: Record<string, string>;
  params: {
    id: string;
  };
}

export default function CarDetails({ searchParams, params }: CarDetailsProps) {
  const { data, isLoading } = useGetCar(params.id);

  if (isLoading) return <CarDetailsSkeleton />;

  if (!data)
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-xl font-semibold">404 Not Found</h2>
        <p>Could not find the requested car.</p>
      </div>
    );

  return (
    <div className="grid grid-cols-2 gap-x-8">
      <ImageSlider car={data} />
      <CarInformation car={data} searchParams={searchParams} />
    </div>
  );
}
