import PrimaryButton from "../../buttons/primaryButton";
import GalleryIcon from "../../icons/gallery";
import HeartIcon from "../../icons/heart";

export default function ListItemSkeleton() {
  return (
    <div className="flex min-h-96 flex-col rounded-xl bg-white p-6">
      <div className="flex place-content-between">
        <div className="grid gap-y-3">
          <div className="h-4 w-28 rounded-lg bg-primary-300" />
          <div className="h-4 w-28 rounded-lg bg-[#EFF3FD]" />
        </div>
        <HeartIcon className="*:fill-[#ED3F3F] *:stroke-[#ED3F3F]" />
      </div>
      <GalleryIcon className="m-auto" />
      <div className="mb-9 flex place-content-between">
        <div className="h-4 w-28 rounded-lg bg-[#EFF3FD]" />
        <div className="h-4 w-28 rounded-lg bg-[#EFF3FD]" />
        <div className="h-4 w-28 rounded-lg bg-[#EFF3FD]" />
      </div>
      <div className="flex place-content-between">
        <div className="grid gap-y-2">
          <div className="h-4 w-28 rounded-lg bg-primary-300" />
          <div className="h-4 w-28 rounded-lg bg-[#EFF3FD]" />
        </div>
        <PrimaryButton size="lg" disabled>
          Rent now
        </PrimaryButton>
      </div>
    </div>
  );
}
