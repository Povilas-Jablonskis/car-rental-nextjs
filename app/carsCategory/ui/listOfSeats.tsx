"use client";

import { CarSeat } from "@/app/api/cars/seatsTotals/types";
import { useCarSeatsTotals } from "@/app/lib/hooks";
import Checkbox from "@/app/ui/controls/checkbox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

export default function ListOfSeats() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  let values = Object.values(CarSeat).map((x) => Number(x));
  values = values.splice(values.length / 2, values.length / 2);

  const initialData = values.reduce((acc, curr) => {
    return { ...acc, [curr]: 0 };
  }, {});

  const { data } = useCarSeatsTotals(initialData);

  const seatsRaw = searchParams.get("seats");
  let seats = seatsRaw ? seatsRaw.split(",") : [];

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    const checked = e.currentTarget.checked;

    if (checked) {
      seats.push(e.currentTarget.value);
    } else {
      seats = seats.filter((x) => x !== e.currentTarget.value);
    }

    if (seats.length) {
      params.set("seats", seats.join(","));
    } else {
      params.delete("seats");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="grid gap-y-7">
      <p className="text-secondary-300 text-xs font-semibold">C A P A C I T Y</p>
      {Object.entries(data || {}).map(([name, value], idx) => (
        <Checkbox
          key={idx}
          id={name}
          value={name}
          defaultChecked={seats?.some((x) => x === name)}
          onChange={onChange}
        >
          <label
            htmlFor={name}
            className="text-start text-secondary-400 text-xl font-semibold hover:cursor-pointer"
          >
            {CarSeat[Number(name)]}{" "}
            <label
              htmlFor={name}
              className="text-start text-secondary-300 text-xl font-semibold hover:cursor-pointer"
            >
              ({value})
            </label>
          </label>
        </Checkbox>
      ))}
    </div>
  );
}
