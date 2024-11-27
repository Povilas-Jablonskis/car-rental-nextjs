"use client";

import CarNotFound from "@/app/_components/carNotFound";
import { useGetCar } from "@/app/_lib/hooks";
import Reviews from "../reviews";
import CarInformation from "./carInformation";
import ImageSlider from "./imageSlider";
import CarDetailsSkeleton from "./skeleton";

interface CarDetailsProps {
  params: {
    id: string;
  };
}

export default function CarDetails({ params }: CarDetailsProps) {
  const { data, isLoading } = useGetCar(params.id);

  if (isLoading) return <CarDetailsSkeleton />;

  if (!data) return <CarNotFound />;

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
