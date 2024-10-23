import { PrismaClient } from "@prisma/client";
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

  return insertedCars;
}

export async function GET() {
  try {
    await seedCars();

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
