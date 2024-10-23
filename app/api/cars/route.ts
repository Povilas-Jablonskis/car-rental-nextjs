import { CarListResponse } from "@/app/lib/hooks";
import { PrismaClient } from "@prisma/client";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const prisma = new PrismaClient();

    const searchParams = request.nextUrl.searchParams;

    const currentPageNumber = Number(searchParams.get("pageNumber"));
    const pageSize = Number(searchParams.get("pageSize"));

    const typesRaw = searchParams.get("types");
    const types = typesRaw ? typesRaw.split(",") : undefined;

    const seatsRaw = searchParams.get("seats");
    const seats = seatsRaw ? seatsRaw.split(",").map((x) => Number(x)) : undefined;

    const priceRaw = searchParams.get("price");
    const price = priceRaw ? Number(priceRaw) : undefined;

    const popularRaw = searchParams.get("popular");
    const popular = popularRaw ? Number(popularRaw) : undefined;

    const count = await prisma.cars.count({
      where: { popular: { equals: popular != null ? !!popular : undefined } },
    });

    const cars = await prisma.cars.findMany({
      skip: currentPageNumber * pageSize,
      take: pageSize,
      where: {
        price: { lte: price },
        type: { in: types },
        seats: { in: seats },
        popular: { equals: popular != null ? !!popular : undefined },
      },
    });

    const nextPageNumberCandidate = currentPageNumber + 1;
    const nextPageNumber =
      nextPageNumberCandidate * pageSize < Number(count) ? nextPageNumberCandidate : null;

    return NextResponse.json<CarListResponse>({ data: cars, pageNumber: nextPageNumber });
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error;
    }

    return NextResponse.json({
      apiMessage: { errorMsg: "Failed to fetch cars." },
    });
  }
}
