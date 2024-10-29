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

    const count = await prisma.reviews.count({
      where: {
        carsId: { equals: params.id },
      },
    });

    return NextResponse.json(count);
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error;
    }

    return NextResponse.json({
      apiMessage: { errorMsg: "Failed to fetch total reviews." },
    });
  }
}
