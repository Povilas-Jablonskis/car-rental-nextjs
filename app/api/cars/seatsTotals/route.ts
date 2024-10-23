import { PrismaClient } from "@prisma/client";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { NextResponse } from "next/server";
import { CarSeat } from "./types";

export async function GET() {
  try {
    const prisma = new PrismaClient();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    let values = Object.values(CarSeat).map((x) => Number(x));
    values = values.splice(values.length / 2, values.length / 2);

    const response: Record<number, number> = {};

    for (let i = 0; i < values.length; i++) {
      const count = await prisma.cars.count({
        where: {
          seats: { equals: values[i] },
        },
      });

      response[values[i]] = count;
    }

    return NextResponse.json(response);
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error;
    }

    return NextResponse.json({
      apiMessage: { errorMsg: "Failed to fetch car types." },
    });
  }
}
