"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import car7 from "../public/images/car7.png";
import car8 from "../public/images/car8.png";
import PrimaryButton from "./ui/buttons/primaryButton";
import RentalCarButton from "./ui/buttons/rentalCarButton";
import SwapIcon from "./ui/icons/swap";
import Ad from "./ui/panels/ad";
import PopularCarList from "./ui/panels/CarList/PopularCarList";
import RecommendedCarList from "./ui/panels/CarList/RecommendedCarList";
import DateTimeLocationPicker from "./ui/panels/dateTimeLocationPicker";

export default function Home() {
  const { push } = useRouter();

  return (
    <div className="bg-[#F6F7F9] py-8 pb-16 px-16">
      <div className="grid grid-cols-2 gap-8 mb-8">
        <Ad
          title="The Best Platform for Car Rental"
          subTitle="Ease of doing a car rental safely and reliably. Of course at a low price."
          className="bg-information-500 bg-informationImage"
        >
          <RentalCarButton className="bg-primary-500" />
          <Image className="mx-auto" priority src={car7} alt="Car" />
        </Ad>
        <Ad
          title="Easy way to rent a car at a low price"
          subTitle="Providing cheap car rental services and safe and comfortable facilities."
          className="bg-primary-500 bg-primaryImage"
        >
          <RentalCarButton className="bg-information-500" />
          <Image className="mx-auto" priority src={car8} alt="Car" />
        </Ad>
      </div>
      <div className="grid grid-flow-col auto-cols-[1fr_max-content_1fr] gap-11 mb-9">
        <DateTimeLocationPicker label="Pick - Up" />
        <PrimaryButton className="!p-[17px] self-center shadow-[0_0_50px_11px_rgba(16,50,147,0.28)]">
          <SwapIcon />
        </PrimaryButton>
        <DateTimeLocationPicker label="Drop - Off" />
      </div>
      <div className="grid gap-y-8">
        <div>
          <div className="mb-8 flex place-content-between">
            <span className="text-base font-semibold text-secondary-300">Popular Cars</span>
            <button
              className="text-end text-base font-semibold text-primary-500"
              onClick={() => push("/carsCategory")}
            >
              View All
            </button>
          </div>
          <PopularCarList />
        </div>
        <div>
          <div className="mb-8 flex place-content-between">
            <span className="text-base font-semibold text-secondary-300">Recommended Cars</span>
          </div>
          <RecommendedCarList />
        </div>
      </div>
    </div>
  );
}
