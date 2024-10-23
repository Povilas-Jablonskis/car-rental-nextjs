import { CarListResponse } from "@/app/lib/hooks";
import { InfiniteData } from "@tanstack/react-query";
import { Fragment } from "react";
import ListItem from "./listItem";

interface CarListProps extends React.HTMLAttributes<HTMLDivElement> {
  data: InfiniteData<CarListResponse> | undefined;
}

export default function CarList({ data, ...rest }: CarListProps) {
  return (
    <div {...rest}>
      {data?.pages.map((group, i) => (
        <Fragment key={i}>
          {group?.data.map((car) => <ListItem key={car.id} car={car} />)}
        </Fragment>
      ))}
    </div>
  );
}
