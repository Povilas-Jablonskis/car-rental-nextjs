import { PrismaClient } from "@prisma/client";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { NextRequest, NextResponse } from "next/server";
import { CarSeat } from "./types";

export async function GET(request: NextRequest) {
  try {
    const prisma = new PrismaClient();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const searchParams = request.nextUrl.searchParams;

    let values = Object.values(CarSeat).map((x) => Number(x));
    values = values.splice(values.length / 2, values.length / 2);

    const response = (
      await Promise.all(
        values.map(async (value) => {
          const count = await prisma.cars.count({
            where: {
              seats: { equals: value },
            },
          });

          return { [value]: count };
        }),
      )
    ).reduce((acc, curr) => ({ ...acc, ...curr }), {});

    return NextResponse.json(response);
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error;
    }

    return NextResponse.json({
      apiMessage: { errorMsg: "Failed to fetch car seats." },
    });
  }
}
