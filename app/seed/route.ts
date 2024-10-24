import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { cars } from "../lib/placeholder-data";

async function seedCars() {
  const prisma = new PrismaClient();

  await prisma.cars.deleteMany();

  const insertedCars = await Promise.all(
    cars.map(
      async ({
        name,
        image,
        type,
        gear,
        fuelTank: fuelTank,
        seats,
        popular,
        price,
        oldPrice,
      }) => {
        return prisma.cars.create({
          data: {
            name,
            image,
            type: type.toString(),
            gear,
            fuelTank,
            seats,
            popular,
            price,
            oldPrice,
          },
        });
      },
    ),
  );

  return prisma.cars.create({
    data: {
      name: cars[0].name,
      image: cars[0].image,
      type: cars[0].type.toString(),
      gear: cars[0].gear,
      fuelTank: cars[0].fuelTank,
      seats: cars[0].seats,
      popular: cars[0].popular,
      price: cars[0].price,
      oldPrice: cars[0].oldPrice,
    },
  });

  return insertedCars;
}

export async function GET(request: NextRequest) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const searchParams = request.nextUrl.searchParams;

    const insertedCars = await seedCars();

    return Response.json({ message: insertedCars });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
