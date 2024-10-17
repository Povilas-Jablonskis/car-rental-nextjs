import { sql } from "@vercel/postgres";
import "server-only";
import { Car } from "./definitions";

export const ITEMS_PER_PAGE = 4;

export async function fetchCars() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const cars = await sql<Car>`SELECT * FROM cars`;

    return cars.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cars.");
  }
}

export async function fetchCarsTotal() {
  try {
    const count = await sql`SELECT COUNT(*) FROM cars`;

    return Number(count.rows[0].count);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of cars.");
  }
}

export async function fetchCarById(id: string) {
  try {
    const data = await sql<Car>`SELECT * FROM cars WHERE cars.id = ${id};`;

    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoice.");
  }
}
