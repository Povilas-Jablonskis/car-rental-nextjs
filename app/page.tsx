import { CarCategory } from "@prisma/client";
import Image from "next/image";
import car7 from "../public/images/car7.png";
import car8 from "../public/images/car8.png";
import RentalCarButton from "./_components/buttons/rental";
import Ad from "./_components/panels/ad";
import CarList from "./_components/panels/CarList";
import CarListTitle from "./_components/panels/CarList/title";
import PickupDropoffPicker from "./_components/pickupDropoffPicker";

export default function Home() {
  return (
    <div className="px-6 py-8 pb-16 2xl:px-16">
      <div className="mb-8 grid gap-8 md:grid-cols-2">
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
      <PickupDropoffPicker breakpoint="lg" />
      <div className="grid gap-y-8">
        <CarList
          className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          pageSize={4}
          categories={[CarCategory.Ropular]}
        >
          <CarListTitle title="Popular Cars" searchParams={{}} />
        </CarList>
        <CarList
          className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          pageSize={8}
          categories={[CarCategory.Recommended]}
          showMoreCars
        >
          <CarListTitle title="Recommended Cars" />
        </CarList>
      </div>
    </div>
  );
}
