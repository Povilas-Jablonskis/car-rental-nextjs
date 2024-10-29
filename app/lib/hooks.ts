"use client";

import { CarCategory, Cars } from "@prisma/client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export interface InfiniteQueryResponse<T extends object> {
  data: T[];
  pageNumber: number | null;
}

export function useGetCarList(
  pageSize: number,
  categories: CarCategory[],
  searchParams?: Record<string, string>,
) {
  return useInfiniteQuery<InfiniteQueryResponse<Cars>>({
    queryKey: ["fetchCars", pageSize, categories, searchParams],
    queryFn: async ({ pageParam }) => {
      const params = new URLSearchParams(searchParams);
      const paramsStr = params.size ? `&${params.toString()}` : "";
      const categoriesStr = `&categories=${categories.join(",")}`;
      const response = await fetch(
        `/api/cars?pageNumber=${pageParam}&pageSize=${pageSize}${categoriesStr}${paramsStr}`,
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
