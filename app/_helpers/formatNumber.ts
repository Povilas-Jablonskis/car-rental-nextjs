import { Prisma } from "@prisma/client";

export default function formatNumber(number: Prisma.Decimal) {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return USDollar.format(+number);
}
