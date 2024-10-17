export interface BaseCar {
  id?: string;
  name: string;
  image: string;
  type: "Sport" | "SUV" | "Sedan" | "Hatchback";
  gear: "Manual" | "Automatic";
  fueltank: number;
  seats: 2 | 4 | 6;
  popular: boolean;
  price: number;
  oldprice?: number;
}

export type Car = BaseCar & {
  id: string;
};
