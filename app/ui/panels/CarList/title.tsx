"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";

interface CarListTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  searchParams?: Record<string, string>;
}

export default function CarListTitle({
  searchParams,
  title,
  className,
  ...rest
}: CarListTitleProps) {
  const { push } = useRouter();

  return (
    <div
      {...rest}
      className={clsx("mb-8 flex place-content-between", className)}
    >
      {title && (
        <span className="text-base font-semibold text-secondary-300">
          {title}
        </span>
      )}

      {searchParams && (
        <button
          className="text-end text-base font-semibold text-primary-500"
          onClick={() =>
            push(
              `/carsCategory?${new URLSearchParams(searchParams).toString()}`,
            )
          }
        >
          View All
        </button>
      )}
    </div>
  );
}
