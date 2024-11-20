import ListOfSeats from "./ui/listOfSeats";
import ListOfTypes from "./ui/listOfTypes";
import SelectPrice from "./ui/selectPrice";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="hidden min-w-80 flex-col gap-y-8 bg-white px-6 py-8 lg:flex 2xl:gap-y-14 2xl:p-6">
        <ListOfTypes />
        <ListOfSeats />
        <SelectPrice />
      </div>
      <div className="flex-1 px-6 py-8 2xl:p-8">{props.children}</div>
    </div>
  );
}
