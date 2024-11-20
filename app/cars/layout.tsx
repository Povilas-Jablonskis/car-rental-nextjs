import { Suspense } from "react";
import ListOfSeats from "./components/sidebar/listOfSeats";
import ListOfTypes from "./components/sidebar/listOfTypes";
import SelectPrice from "./components/sidebar/selectPrice";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="hidden min-w-80 flex-col gap-y-8 bg-white px-6 py-8 lg:flex 2xl:gap-y-14 2xl:p-6">
        <Suspense>
          <ListOfTypes />
          <ListOfSeats />
          <SelectPrice />
        </Suspense>
      </div>
      <div className="flex-1 px-6 py-8 2xl:p-8">{props.children}</div>
    </div>
  );
}
