import { sql } from "@vercel/postgres";
import { Car } from "./definitions";

export async function fetchCarById(id: string) {
  try {
    const data = await sql<Car>`SELECT * FROM cars WHERE cars.id = ${id};`;

    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoice.");
  }
}
