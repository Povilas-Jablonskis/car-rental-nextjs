"use client";

import Checkbox from "@/app/_components/controls/checkbox";
import { useCarTotalTypes } from "@/app/_lib/hooks";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

export default function ListOfTypes() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { data } = useCarTotalTypes();

  const typesRaw = searchParams.get("types");
  let types = typesRaw ? typesRaw.split(",") : [];

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    const checked = e.currentTarget.checked;

    if (checked) {
      types.push(e.currentTarget.value);
    } else {
      types = types.filter((x) => x !== e.currentTarget.value);
    }

    if (types.length) {
      params.set("types", types.join(","));
    } else {
      params.delete("types");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="grid gap-y-4 2xl:gap-y-7">
      <p className="text-xs font-semibold text-secondary-300">T Y P E</p>
      {Object.entries(data).map(([name, value]) => (
        <Checkbox
          key={name}
          id={name}
          value={name}
          defaultChecked={types?.some((x) => x === name)}
          onChange={onChange}
        >
          <label
            htmlFor={name}
            className="text-start text-base font-semibold leading-5 text-secondary-400 hover:cursor-pointer 2xl:text-xl"
          >
            {name}{" "}
            <label htmlFor={name} className="text-secondary-300">
              ({value})
            </label>
          </label>
        </Checkbox>
      ))}
    </div>
  );
}
