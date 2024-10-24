import { PrismaClient } from "@prisma/client";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { NextResponse } from "next/server";
import { CarSeat } from "./types";

export async function GET() {
  try {
    const prisma = new PrismaClient();

    let values = Object.values(CarSeat).map((x) => Number(x));
    values = values.splice(values.length / 2, values.length / 2);

    const response: Record<number, number> = {};

    console.log("seats enum", values);

    for (let i = 0; i < values.length; i++) {
      const count = await prisma.cars.count({
        where: {
          seats: { equals: values[i] },
        },
      });

      response[values[i]] = count;

      console.log("seats", response);
    }

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
