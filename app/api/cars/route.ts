import { Car } from "@/app/lib/definitions";
import { CarListResponse } from "@/app/lib/hooks";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const currentPageNumber = Number(searchParams.get("pageNumber"));
    const pageSize = Number(searchParams.get("pageSize"));

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const count = await sql`SELECT COUNT(*) FROM cars`;

    const cars = await sql<Car>`SELECT * FROM cars LIMIT ${pageSize} OFFSET ${
      currentPageNumber * pageSize
    }`;

    const nextPageNumberCandidate = currentPageNumber + 1;
    const nextPageNumber =
      nextPageNumberCandidate * pageSize < Number(count.rows[0].count)
        ? nextPageNumberCandidate
        : null;

    return NextResponse.json<CarListResponse>({ data: cars.rows, pageNumber: nextPageNumber });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cars.");
  }
}
