import GalleryIcon from "@/app/_components/icons/gallery";
import HeartIcon from "@/app/_components/icons/heart";

export default function CarListItemSkeleton() {
  return (
    <div className="flex flex-col rounded-xl bg-white p-4 2xl:p-6">
      <div className="flex place-content-between">
        <div className="grid gap-y-2 2xl:gap-y-3">
          <div className="h-4 w-28 rounded-lg bg-primary-300" />
          <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
        </div>
        <HeartIcon />
      </div>
      <div className="mb-11 mt-8 flex place-items-end sm:m-0 sm:flex-1 sm:flex-col sm:place-items-stretch">
        <GalleryIcon
          className="m-auto *:fill-secondary-300 sm:mb-11 sm:mt-8 sm:*:fill-primary-300"
          width="60"
          height="60"
        />
        <div className="my-auto flex flex-col gap-y-5 sm:mb-9 sm:flex-row sm:place-content-between">
          <div className="h-4 w-14 rounded-lg bg-primary-skeleton sm:h-4 sm:w-20" />
          <div className="h-4 w-14 rounded-lg bg-primary-skeleton/50 sm:h-4 sm:w-20 sm:bg-primary-skeleton" />
          <div className="h-4 w-14 rounded-lg bg-primary-skeleton sm:h-4 sm:w-20" />
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
