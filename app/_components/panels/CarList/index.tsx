"use client";

import { useGetCarList } from "@/app/_lib/hooks";
import { CarCategory } from "@prisma/client";
import clsx from "clsx";
import { Fragment } from "react";
import PrimaryButton from "../../buttons/primary";

import CarListItem from "./item";
import CarListSkeleton from "./skeleton";

interface CarListProps extends React.HTMLAttributes<HTMLDivElement> {
  pageSize: number;
  categories: CarCategory[];
  searchParams?: Record<string, string>;
  showMoreCars?: boolean;
}

export default function CarList({
  pageSize,
  categories,
  searchParams,
  showMoreCars,
  className,
  children,
  ...rest
}: CarListProps) {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useGetCarList(pageSize, categories, searchParams);

  if (isLoading)
    return (
      <div>
        {children}
        <CarListSkeleton
          className={clsx("grid gap-8", className)}
          totalCars={pageSize}
        />
      </div>
    );

  const totalCars = data?.pages.flatMap((page) => page.data).length;

  if (!totalCars) return <></>;

  return (
    <div>
      {children}
      <div {...rest} className={clsx("grid gap-5 2xl:gap-8", className)}>
        {data?.pages.map((group) => (
          <Fragment key={JSON.stringify(group)}>
            {group?.data.map((car) => (
              <CarListItem key={car.id} car={car} searchParams={searchParams} />
            ))}
          </Fragment>
        ))}
      </div>
      {hasNextPage && showMoreCars && (
        <div className="flex place-items-center pt-16">
          <PrimaryButton
            className="mx-auto"
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            Show more cars
          </PrimaryButton>
        </div>
      )}
    </div>
  );
}
