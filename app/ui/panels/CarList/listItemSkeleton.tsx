import GalleryIcon from "../../icons/gallery";
import HeartIcon from "../../icons/heart";

export default function ListItemSkeleton() {
  return (
    <div className="flex min-h-60 flex-col rounded-xl bg-white p-4 xl:min-h-96 2xl:p-6">
      <div className="flex place-content-between">
        <div className="grid gap-y-2 xl:gap-y-3">
          <div className="h-4 w-28 rounded-lg bg-primary-300" />
          <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
        </div>
        <HeartIcon />
      </div>
      <div className="flex flex-1 place-content-between xl:flex-col">
        <GalleryIcon
          className="my-auto *:fill-secondary-300 xl:m-auto xl:*:fill-primary-300"
          width="60"
          height="60"
        />
        <div className="my-auto flex flex-col gap-y-5 xl:mb-9 xl:flex-row xl:place-content-between">
          <div className="h-4 w-14 rounded-lg bg-primary-skeleton xl:h-4 xl:w-28" />
          <div className="h-4 w-14 rounded-lg bg-primary-skeleton/50 xl:h-4 xl:w-28 xl:bg-primary-skeleton" />
          <div className="h-4 w-14 rounded-lg bg-primary-skeleton xl:h-4 xl:w-28" />
        </div>
      </div>
      <div className="flex place-content-between">
        <div className="grid gap-y-2">
          <div className="h-4 w-28 rounded-lg bg-primary-300" />
          <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
        </div>
        <div className="w-28 rounded-lg bg-primary-500" />
      </div>
    </div>
  );
}
