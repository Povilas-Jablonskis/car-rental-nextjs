import { ITEMS_PER_PAGE } from "@/app/lib/data";
import { Car } from "@/app/lib/definitions";
import { CarListResponse } from "@/app/lib/hooks";
import { sql } from "@vercel/postgres";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

type Params = {
  pageNumber: string;
  popular: string;
};

export async function GET(_: NextApiRequest, context: { params: Params }) {
  try {
    const currentPageNumber = Number(context.params.pageNumber);
    const popular = Number(context.params.popular);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const count = await sql`SELECT COUNT(*) FROM cars WHERE popular=${!!popular}`;

    const cars =
      await sql<Car>`SELECT * FROM cars WHERE popular=${!!popular} LIMIT ${ITEMS_PER_PAGE} OFFSET ${
        currentPageNumber * ITEMS_PER_PAGE
      }`;

    const nextPageNumberCandidate = currentPageNumber + 1;
    const nextPageNumber =
      nextPageNumberCandidate * ITEMS_PER_PAGE < Number(count.rows[0].count)
        ? nextPageNumberCandidate
        : null;

    return NextResponse.json<CarListResponse>({ data: cars.rows, pageNumber: nextPageNumber });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cars.");
  }
}
