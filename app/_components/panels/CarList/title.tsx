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
      className={clsx("mb-5 flex place-content-between 2xl:mb-8", className)}
    >
      {title && (
        <span className="text-sm font-semibold text-secondary-300 sm:text-base">
          {title}
        </span>
      )}

      {searchParams && (
        <button
          className="text-end text-xs font-semibold text-primary-500 sm:text-base"
          onClick={() =>
            push(`/cars?${new URLSearchParams(searchParams).toString()}`)
          }
        >
          View All
        </button>
      )}
    </div>
  );
}
