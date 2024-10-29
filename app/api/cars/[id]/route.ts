import { PrismaClient } from "@prisma/client";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { NextRequest, NextResponse } from "next/server";

interface GETProps {
  params: {
    id: string;
  };
}

export async function GET(_: NextRequest, { params }: GETProps) {
  try {
    const prisma = new PrismaClient();

    const car = await prisma.cars.findFirst({
      where: {
        id: { equals: params.id },
      },
      include: {
        reviews: true,
      },
    });

    return NextResponse.json(car);
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error;
    }

    return NextResponse.json({
      apiMessage: { errorMsg: "Failed to fetch car." },
    });
  }
}
