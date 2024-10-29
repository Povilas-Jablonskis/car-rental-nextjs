import GalleryIcon from "@/app/ui/icons/gallery";
import HeartIcon from "@/app/ui/icons/heart";

export default function CarDetailsSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-x-8">
      <div className="grid">
        <div className="mb-6 flex h-[360px] rounded-xl bg-white">
          <GalleryIcon className="m-auto" width={60} height={60} />
        </div>
        <div className="grid grid-cols-3 gap-x-6">
          {[...Array(3)].map((x, idx) => (
            <div key={idx} className="rounded-xl border-4 border-white p-4">
              <div className="flex h-[92px] rounded-xl bg-white">
                <GalleryIcon className="m-auto" width={40} height={40} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-white p-6">
        <div className="flex place-content-between">
          <div className="grid gap-y-3">
            <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
            <div className="h-4 w-[116px] rounded-lg bg-[#EFF3FD]" />
          </div>
          <HeartIcon className="*:fill-[#ED3F3F] *:stroke-[#ED3F3F]" />
        </div>
        <GalleryIcon className="my-auto" width={60} height={60} />
        <div className="mb-auto flex flex-col gap-y-4">
          <div className="h-4 rounded-lg bg-[#EFF3FD]" />
          <div className="h-4 rounded-lg bg-[#EFF3FD]" />
          <div className="h-4 rounded-lg bg-[#EFF3FD]" />
        </div>
        <div className="my-auto grid gap-y-6">
          <div className="flex justify-between">
            <div className="flex gap-x-8">
              <div className="h-4 w-[76px] rounded-lg bg-[#EFF3FD]" />
              <div className="h-4 w-[76px] rounded-lg bg-primary-300" />
            </div>
            <div className="flex gap-x-8">
              <div className="h-4 w-[76px] rounded-lg bg-[#EFF3FD]" />
              <div className="h-4 w-[76px] rounded-lg bg-primary-300" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-8">
              <div className="h-4 w-[76px] rounded-lg bg-[#EFF3FD]" />
              <div className="h-4 w-[76px] rounded-lg bg-primary-300" />
            </div>
            <div className="flex gap-x-8">
              <div className="h-4 w-[76px] rounded-lg bg-[#EFF3FD]" />
              <div className="h-4 w-[76px] rounded-lg bg-primary-300" />
            </div>
          </div>
        </div>
        <div className="flex place-content-between">
          <div className="grid gap-y-2">
            <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
            <div className="h-4 w-[116px] rounded-lg bg-[#EFF3FD]" />
          </div>
          <div className="w-[116px] rounded-lg bg-primary-500" />
        </div>
      </div>
    </div>
  );
}
