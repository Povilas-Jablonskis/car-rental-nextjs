import { InfiniteQueryResponse } from "@/app/lib/hooks";
import { CarCategory, Cars, CarType, PrismaClient } from "@prisma/client";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const prisma = new PrismaClient();

    const searchParams = request.nextUrl.searchParams;

    const currentPageNumber = Number(searchParams.get("pageNumber"));
    const pageSize = Number(searchParams.get("pageSize"));

    const typesRaw = searchParams.get("types");
    const types = typesRaw
      ? typesRaw.split(",").map((x) => CarType[x as keyof typeof CarType])
      : undefined;

    const seatsRaw = searchParams.get("seats");
    const seats = seatsRaw
      ? seatsRaw.split(",").map((x) => Number(x))
      : undefined;

    const priceRaw = searchParams.get("price");
    const price = priceRaw ? Number(priceRaw) : undefined;

    const categoriesRaw = searchParams.get("categories");
    const categories = categoriesRaw
      ? categoriesRaw
          .split(",")
          .map((x) => CarCategory[x as keyof typeof CarCategory])
      : undefined;

    const count = await prisma.cars.count({
      where: {
        price: { lte: price },
        type: { in: types },
        seats: { in: seats },
        category: { hasEvery: categories || [] },
      },
    });

    const cars = await prisma.cars.findMany({
      skip: currentPageNumber * pageSize,
      take: pageSize,
      where: {
        price: { lte: price },
        type: { in: types },
        seats: { in: seats },
        category: { hasEvery: categories || [] },
      },
    });

    const nextPageNumberCandidate = currentPageNumber + 1;
    const nextPageNumber =
      nextPageNumberCandidate * pageSize < Number(count)
        ? nextPageNumberCandidate
        : null;

    return NextResponse.json<InfiniteQueryResponse<Cars>>({
      data: cars,
      pageNumber: nextPageNumber,
    });
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error;
    }

    return NextResponse.json({
      apiMessage: { errorMsg: "Failed to fetch cars." },
    });
  }
}
