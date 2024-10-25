"use client";

import { Cars } from "@prisma/client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export interface CarListResponse {
  data: Cars[];
  pageNumber: number | null;
}

export function useGetCarList(
  pageSize: number,
  popular?: boolean,
  searchParams?: Record<string, string>,
) {
  return useInfiniteQuery<CarListResponse>({
    queryKey: ["fetchCars", pageSize, popular, searchParams],
    queryFn: async ({ pageParam }) => {
      const params = new URLSearchParams(searchParams);
      const paramsStr = params.size ? `&${params.toString()}` : "";
      const popularStr = popular != null ? `&popular=${Number(popular)}` : "";
      const response = await fetch(
        `/api/cars?pageNumber=${pageParam}&pageSize=${pageSize}${popularStr}${paramsStr}`,
      );
      const result = await response.json();
      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageNumber,
    refetchOnWindowFocus: false,
  });
}

export function useCarTypesTotals(initialData: Record<number, number>) {
  return useQuery<Record<string, number>>({
    queryKey: ["fetchCarTypesTotals", initialData],
    queryFn: async () => {
      const response = await fetch(`/api/cars/typesTotals`);
      const result = await response.json();
      return result;
    },
    initialData,
    refetchOnWindowFocus: false,
  });
}

export function useCarSeatsTotals(initialData: Record<number, number>) {
  return useQuery<Record<number, number>>({
    queryKey: ["fetchCarSeatsTotals", initialData],
    queryFn: async () => {
      const response = await fetch(`/api/cars/seatsTotals`);
      const result = await response.json();
      return result;
    },
    initialData,
    refetchOnWindowFocus: false,
  });
}
