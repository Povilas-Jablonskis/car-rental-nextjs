"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { Car } from "./definitions";

export interface CarListResponse {
  data: Car[];
  pageNumber: number | null;
}

export function useGetCarList(popular: boolean) {
  return useInfiniteQuery<CarListResponse>({
    queryKey: ["fetchCars", popular],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(`/api/cars/${pageParam}/${popular}`);
      const result = await response.json();
      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageNumber,
    refetchOnWindowFocus: false,
  });
}
