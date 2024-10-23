"use client";

import { Cars } from "@prisma/client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export interface CarListResponse {
  data: Cars[];
  pageNumber: number | null;
}

export function useGetPopularCarList(pageSize: number) {
  return useInfiniteQuery<CarListResponse>({
    queryKey: ["fetchPopularCars", pageSize],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `/api/cars?pageNumber=${pageParam}&pageSize=${pageSize}&popular=1`,
      );
      const result = await response.json();
      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageNumber,
    refetchOnWindowFocus: false,
  });
}

export function useGetRecommendedCarList(pageSize: number) {
  return useInfiniteQuery<CarListResponse>({
    queryKey: ["fetchRecommendedCars", pageSize],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `/api/cars?pageNumber=${pageParam}&pageSize=${pageSize}&popular=0`,
      );
      const result = await response.json();
      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageNumber,
    refetchOnWindowFocus: false,
  });
}

export function useGetCategoryCarList(
  pageSize: number,
  searchParams: Record<string, string>,
) {
  return useInfiniteQuery<CarListResponse>({
    queryKey: ["fetchCategoryCars", pageSize, searchParams],
    queryFn: async ({ pageParam }) => {
      const params = new URLSearchParams(searchParams);
      const response = await fetch(
        `/api/cars?pageNumber=${pageParam}&pageSize=${pageSize}&${params.toString()}`,
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
    queryKey: ["fetchCarTypesTotals"],
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
    queryKey: ["fetchCarSeatsTotals"],
    queryFn: async () => {
      const response = await fetch(`/api/cars/seatsTotals`);
      const result = await response.json();
      return result;
    },
    initialData,
    refetchOnWindowFocus: false,
  });
}
