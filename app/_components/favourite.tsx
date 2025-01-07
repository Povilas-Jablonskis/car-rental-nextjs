import clsx from "clsx";
import { useState } from "react";
import HeartIcon from "./icons/heart";

interface FavouriteProps {
  defaultFavourite: boolean;
}

export default function Favourite({ defaultFavourite }: FavouriteProps) {
  const [favourite, setFavourite] = useState(defaultFavourite);

  return (
    <button onClick={() => setFavourite((fav) => !fav)}>
      <HeartIcon
        className={clsx({
          "*:fill-transparent *:stroke-secondary-300": !favourite,
        })}
      />
    </button>
  );
}
