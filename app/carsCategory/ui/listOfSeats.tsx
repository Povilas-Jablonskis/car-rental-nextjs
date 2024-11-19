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

  const { data } = useCarSeatsTotals();

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
    <div className="grid gap-y-4 2xl:gap-y-7">
      <p className="text-xs font-semibold text-secondary-300">
        C A P A C I T Y
      </p>
      {Object.entries(data).map(([name, value]) => (
        <Checkbox
          key={name}
          id={name}
          value={name}
          defaultChecked={seats?.some((x) => x === name)}
          onChange={onChange}
        >
          <label
            htmlFor={name}
            className="text-start text-base font-semibold leading-5 text-secondary-400 hover:cursor-pointer 2xl:text-xl"
          >
            {CarSeat[Number(name)]}{" "}
            <label htmlFor={name} className="text-secondary-300">
              ({value})
            </label>
          </label>
        </Checkbox>
      ))}
    </div>
  );
}
