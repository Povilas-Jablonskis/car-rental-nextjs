import ListOfSeats from "./ui/listOfSeats";
import ListOfTypes from "./ui/listOfTypes";
import SelectPrice from "./ui/selectPrice";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[#F6F7F9]">
      <div className="flex min-w-[360px] flex-col gap-y-14 bg-white p-8">
        <ListOfTypes />
        <ListOfSeats />
        <SelectPrice />
      </div>
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}
