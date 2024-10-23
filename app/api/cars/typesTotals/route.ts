import { PrismaClient } from "@prisma/client";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { NextResponse } from "next/server";
import { CarType } from "./types";

export async function GET() {
  try {
    const prisma = new PrismaClient();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const values = Object.values(CarType);

    const response: Record<string, number> = {};

    for (let i = 0; i < values.length; i++) {
      const value = values[i];

      const count = await prisma.cars.count({
        where: {
          type: { equals: value },
        },
      });

      response[value] = count;
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
