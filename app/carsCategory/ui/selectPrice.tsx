"use client";

import Input from "@/app/ui/controls/input";
import Range from "@/app/ui/controls/Range";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SelectPrice() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const min = 0;
  const max = 100;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const rangeInputRef = useRef<HTMLInputElement | null>(null);

  const priceRaw = searchParams.get("price");
  const price = priceRaw ? Number(priceRaw) : 100;

  const updatePrice = useDebouncedCallback(function (price) {
    const params = new URLSearchParams(searchParams);
    params.set("price", price);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 1000);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    let value = Number(e.currentTarget.value);
    if (value > max) value = max;
    if (value < min) value = min;
    const correctedValue = value.toString();

    const currentInputRef = inputRef.current;
    if (currentInputRef) {
      currentInputRef.value = correctedValue;
    }

    const currentRangeInputRef = rangeInputRef.current;
    if (currentRangeInputRef) {
      currentRangeInputRef.value = correctedValue;
    }

    updatePrice(correctedValue);
  }

  return (
    <div className="grid gap-y-7">
      <p className="text-xs font-semibold text-secondary-300">P R I C E</p>
      <div className="flex flex-col gap-3">
        <Input
          type="number"
          ref={inputRef}
          defaultValue={price}
          onChange={onChange}
        />
        <Range
          ref={rangeInputRef}
          min={min}
          max={max}
          defaultValue={price}
          onChange={onChange}
        />
        <p className="text-xl font-semibold text-secondary-400">Max. $100.00</p>
      </div>
    </div>
  );
}
