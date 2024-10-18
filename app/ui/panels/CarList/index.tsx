import { CarListResponse } from "@/app/lib/hooks";
import { InfiniteData } from "@tanstack/react-query";
import { Fragment } from "react";
import ListItem from "./listItem";

interface CarListProps {
  data: InfiniteData<CarListResponse> | undefined;
}

export default function CarList({ data, ...rest }: CarListProps) {
  return (
    <div {...rest} className="grid grid-cols-4 gap-8">
      {data?.pages.map((group, i) => (
        <Fragment key={i}>
          {group?.data.map((car) => (
            <ListItem key={car.id} car={car} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}
