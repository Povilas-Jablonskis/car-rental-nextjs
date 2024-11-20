import { CarCategory, Cars, CarType, Prisma, Reviews } from "@prisma/client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { CarSeat } from "../api/cars/totalSeats/types";

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

export function useCarTotalTypes() {
  const values = Object.values(CarType);

  const initialData = values.reduce((acc, curr) => {
    return { ...acc, [curr]: 0 };
  }, {});

  return useQuery<Record<string, number>>({
    queryKey: ["fetchCarTotalTypes", initialData],
    queryFn: async () => {
      const response = await fetch(`/api/cars/totalTypes`);
      const result = await response.json();
      return result;
    },
    initialData,
    refetchOnWindowFocus: false,
  });
}

export function useCarTotalSeats() {
  let values = Object.values(CarSeat).map((x) => Number(x));
  values = values.splice(values.length / 2, values.length / 2);

  const initialData = values.reduce((acc, curr) => {
    return { ...acc, [curr]: 0 };
  }, {});

  return useQuery<Record<number, number>>({
    queryKey: ["fetchCarTotalSeats", initialData],
    queryFn: async () => {
      const response = await fetch(`/api/cars/totalSeats`);
      const result = await response.json();
      return result;
    },
    initialData,
    refetchOnWindowFocus: false,
  });
}
