import Image from "next/image";
import car7 from "../public/images/car7.png";
import car8 from "../public/images/car8.png";
import PrimaryButton from "./ui/buttons/primaryButton";
import RentalCarButton from "./ui/buttons/rentalCarButton";
import SwapIcon from "./ui/icons/swap";
import Ad from "./ui/panels/ad";
import CarList from "./ui/panels/CarList";
import CarListTitle from "./ui/panels/CarList/title";
import DateTimeLocationPicker from "./ui/panels/dateTimeLocationPicker";

export default function Home() {
  return (
    <div className="bg-[#F6F7F9] px-16 py-8 pb-16">
      <div className="mb-8 grid grid-cols-2 gap-8">
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
      <div className="mb-9 grid auto-cols-[1fr_max-content_1fr] grid-flow-col gap-11">
        <DateTimeLocationPicker label="Pick - Up" />
        <PrimaryButton className="self-center !p-[17px] shadow-[0_0_50px_11px_rgba(16,50,147,0.28)]">
          <SwapIcon />
        </PrimaryButton>
        <DateTimeLocationPicker label="Drop - Off" />
      </div>
      <div className="grid gap-y-8">
        <CarList className="grid-cols-4" pageSize={4} popular={true}>
          <CarListTitle title="Popular Cars" searchParams={{}} />
        </CarList>
        <CarList
          className="grid-cols-4"
          pageSize={8}
          popular={false}
          showMoreCars
        >
          <CarListTitle title="Recommended Cars" />
        </CarList>
      </div>
    </div>
  );
}
