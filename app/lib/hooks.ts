"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { Car } from "./definitions";

export interface CarListResponse {
  data: Car[];
  pageNumber: number | null;
}

export function useGetPopularCarList(pageSize: number) {
  return useInfiniteQuery<CarListResponse>({
    queryKey: ["fetchPopularCars"],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(`/api/cars/1?pageNumber=${pageParam}&pageSize=${pageSize}`);
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
    queryKey: ["fetchRecommendedCars"],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(`/api/cars/0?pageNumber=${pageParam}&pageSize=${pageSize}`);
      const result = await response.json();
      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageNumber,
    refetchOnWindowFocus: false,
  });
}
