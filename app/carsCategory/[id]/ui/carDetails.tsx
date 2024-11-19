"use client";

import { useGetCar } from "@/app/lib/hooks";
import CarDetailsSkeleton from "./carDetailsSkeleton";
import CarInformation from "./carInformation";
import ImageSlider from "./imageSlider";
import Reviews from "./reviews";

interface CarDetailsProps {
  params: {
    id: string;
  };
}

export default function CarDetails({ params }: CarDetailsProps) {
  const { data, isLoading } = useGetCar(params.id);

  if (isLoading) return <CarDetailsSkeleton />;

  if (!data)
    return (
      <div className="flex flex-col items-center justify-center gap-y-2">
        <h2 className="text-xl font-semibold">404 Not Found</h2>
        <p>Could not find the requested car.</p>
      </div>
    );

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-2">
        <ImageSlider car={data} />
        <CarInformation car={data} />
      </div>
      {!!data.reviews.length && (
        <Reviews params={params} totalReviews={data.reviews.length} />
      )}
    </>
  );
}
