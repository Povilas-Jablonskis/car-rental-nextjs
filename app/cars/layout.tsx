import { Suspense } from "react";
import ListOfSeats from "./components/sidebar/listOfSeats";
import ListOfTypes from "./components/sidebar/listOfTypes";
import SelectPrice from "./components/sidebar/selectPrice";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="hidden flex-col gap-y-14 bg-white p-6 lg:flex">
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
