import GalleryIcon from "@/app/_components/icons/gallery";
import HeartIcon from "@/app/_components/icons/heart";

export default function CarDetailsSkeleton() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="grid">
        <div className="mb-6 flex h-60 rounded-xl bg-white 2xl:h-96">
          <GalleryIcon className="m-auto" width={60} height={60} />
        </div>
        <div className="grid grid-cols-3 gap-x-6">
          {[...Array(3).keys()].map((x) => (
            <div
              key={x}
              className="rounded-xl border-4 border-white p-1.5 2xl:p-4"
            >
              <div className="flex h-14 rounded-xl bg-white 2xl:h-24">
                <GalleryIcon className="m-auto size-6 2xl:size-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-white p-4 2xl:p-6">
        <div className="flex place-content-between">
          <div className="grid gap-y-3">
            <div className="h-4 w-28 rounded-lg bg-primary-300" />
            <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
          </div>
          <HeartIcon className="hidden lg:block" />
        </div>
        <div className="mb-auto mt-6 flex flex-col gap-y-4 2xl:my-auto">
          <div className="h-4 rounded-lg bg-primary-skeleton" />
          <div className="h-4 rounded-lg bg-primary-skeleton" />
          <div className="h-4 rounded-lg bg-primary-skeleton" />
        </div>
        <div className="mb-6 mt-8 grid gap-y-6">
          <div className="flex justify-between">
            <div className="flex gap-x-8 lg:flex-1">
              <div className="h-4 w-20 rounded-lg bg-primary-skeleton lg:w-full" />
              <div className="h-4 w-20 rounded-lg bg-primary-300 lg:hidden" />
            </div>
            <div className="flex gap-x-8">
              <div className="h-4 w-20 rounded-lg bg-primary-skeleton lg:hidden" />
              <div className="h-4 w-20 rounded-lg bg-primary-300 lg:hidden" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-8 lg:flex-1">
              <div className="h-4 w-20 rounded-lg bg-primary-skeleton lg:w-full" />
              <div className="h-4 w-20 rounded-lg bg-primary-300 lg:hidden" />
            </div>
            <div className="flex gap-x-8">
              <div className="h-4 w-20 rounded-lg bg-primary-skeleton lg:hidden" />
              <div className="h-4 w-20 rounded-lg bg-primary-300 lg:hidden" />
            </div>
          </div>
        </div>
        <div className="mt-auto flex place-content-between">
          <div className="grid gap-y-2">
            <div className="h-4 w-28 rounded-lg bg-primary-300" />
            <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
          </div>
          <div className="w-28 rounded-lg bg-primary-500" />
        </div>
      </div>
    </div>
  );
}
