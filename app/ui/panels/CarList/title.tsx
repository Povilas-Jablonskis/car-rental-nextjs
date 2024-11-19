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
      className={clsx("mb-5 flex place-content-between xl:mb-8", className)}
    >
      {title && (
        <span className="text-sm font-semibold text-secondary-300 lg:text-base">
          {title}
        </span>
      )}

      {searchParams && (
        <button
          className="text-end text-xs font-semibold text-primary-500 lg:text-base"
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
