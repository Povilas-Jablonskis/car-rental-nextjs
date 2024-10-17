import { db } from "@vercel/postgres";
import { cars } from "../lib/placeholder-data";

const client = await db.connect();

async function seedCars() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS cars (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name varchar(255) NOT NULL,
      image varchar NOT NULL,
      type varchar(255) NOT NULL,
      gear varchar(255) NOT NULL,
      fuelTank int NOT NULL,
      seats int NOT NULL,
      popular boolean NOT NULL,
      price money NOT NULL,
      oldPrice money NULL
    );
  `;

  await client.sql`DELETE from cars`;

  const insertedCars = await Promise.all(
    cars.map(async (car) => {
      return client.sql`
        INSERT INTO cars (name, image, type, gear, fuelTank, seats, popular, price, oldPrice)
        VALUES (${car.name}, ${car.image}, ${car.type}, ${car.gear}, ${car.fueltank}, ${car.seats}, ${car.popular}, ${car.price}, ${car.oldprice})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedCars;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedCars();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
