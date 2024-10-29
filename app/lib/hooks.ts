"use client";

import { CarCategory, Cars, Prisma, Reviews } from "@prisma/client";
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

export function useGetCar(id: string) {
  return useQuery<
    Prisma.CarsGetPayload<{
      include: {
        reviews: true;
      };
    }>
  >({
    queryKey: ["fetchCar", id],
    queryFn: async () => {
      const response = await fetch(`/api/cars/${id}`);
      const result = await response.json();
      return result;
    },
    refetchOnWindowFocus: false,
  });
}

export function useGetReviews(pageSize: number, carId: string) {
  return useInfiniteQuery<InfiniteQueryResponse<Reviews>>({
    queryKey: ["fetchReviews", pageSize, carId],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `/api/reviews/${carId}?pageNumber=${pageParam}&pageSize=${pageSize}`,
      );
      const result = await response.json();
      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageNumber,
    refetchOnWindowFocus: false,
  });
}

export function useGetReviewsTotals(carId: string) {
  return useQuery<number>({
    queryKey: ["fetchReviewsTotals", carId],
    queryFn: async () => {
      const response = await fetch(`/api/reviews/${carId}/totals`);
      const result = await response.json();
      return result;
    },
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
