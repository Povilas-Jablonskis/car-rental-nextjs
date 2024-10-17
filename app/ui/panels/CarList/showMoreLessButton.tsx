"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import PrimaryButton from "../../buttons/primaryButton";

interface ShowMoreLessButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showAllRecommendedCars: number;
}

export default function ShowMoreLessButton({
  className,
  showAllRecommendedCars,
  ...rest
}: ShowMoreLessButtonProps) {
  const pathname = usePathname();
  const { replace } = useRouter();

  function toggleMoreLess() {
    replace(`${pathname}?showAllRecommendedCars=${Number(!showAllRecommendedCars)}`, {
      scroll: false,
    });
  }

  return (
    <PrimaryButton
      {...rest}
      size="lg"
      className={clsx("mx-auto", className)}
      onClick={() => toggleMoreLess()}
    >
      Show {showAllRecommendedCars ? "less" : "more"} cars
    </PrimaryButton>
  );
}
