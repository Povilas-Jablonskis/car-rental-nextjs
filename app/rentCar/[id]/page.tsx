"use client";

import { useGetCar } from "@/app/lib/hooks";
import RentalForm from "./ui/rentalForm";
import RentalFormSkeleton from "./ui/rentalFormSkeleton";
import RentalSummary from "./ui/rentalSummary";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const { data, isLoading } = useGetCar(params.id);

  if (isLoading) return <RentalFormSkeleton />;

  if (!data)
    return (
      <div className="p-8">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h2 className="text-xl font-semibold">404 Not Found</h2>
          <p>Could not find the requested car.</p>
        </div>
      </div>
    );

  return (
    <div className="p-6 lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[auto_36%]">
        <RentalForm />
        <RentalSummary data={data} />
      </div>
    </div>
  );
}
