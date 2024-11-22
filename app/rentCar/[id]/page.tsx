"use client";

import { useGetCar } from "@/app/_lib/hooks";
import { use } from "react";
import RentalForm from "./components/form";
import RentalFormSkeleton from "./components/form/skeleton";
import RentalSummary from "./components/rentalSummary";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function Page({ params }: PageProps) {
  const { id } = use(params);
  const { data, isLoading } = useGetCar(id);

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
    <div className="p-6 2xl:p-8">
      <div className="grid gap-8 lg:grid-cols-[auto_36%]">
        <RentalForm />
        <RentalSummary data={data} />
      </div>
    </div>
  );
}
