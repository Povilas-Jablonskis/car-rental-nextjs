import { ITEMS_PER_PAGE } from "@/app/lib/data";
import PrimaryButton from "../../buttons/primaryButton";
import GalleryIcon from "../../icons/gallery";
import HeartIcon from "../../icons/heart";

function ListItem() {
  return (
    <div className="rounded-xl bg-white p-6">
      <div className="flex place-content-between">
        <div className="grid gap-y-3">
          <div className="bg-primary-300 w-28 h-4 rounded-lg" />
          <div className="bg-[#EFF3FD] w-28 h-4 rounded-lg" />
        </div>
        <HeartIcon className="*:fill-[#ED3F3F] *:stroke-[#ED3F3F]" />
      </div>
      <GalleryIcon className="mx-auto my-16" />
      <div className="flex place-content-between mb-9">
        <div className="bg-[#EFF3FD] w-28 h-4 rounded-lg" />
        <div className="bg-[#EFF3FD] w-28 h-4 rounded-lg" />
        <div className="bg-[#EFF3FD] w-28 h-4 rounded-lg" />
      </div>
      <div className="flex place-content-between">
        <div className="grid gap-y-2">
          <div className="bg-primary-300 w-28 h-4 rounded-lg" />
          <div className="bg-[#EFF3FD] w-28 h-4 rounded-lg" />
        </div>
        <PrimaryButton size="lg" disabled>
          Rent now
        </PrimaryButton>
      </div>
    </div>
  );
}

export default function CarListSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-8">
      {[...Array(ITEMS_PER_PAGE)].map((_, idx) => (
        <ListItem key={idx} />
      ))}
    </div>
  );
}
