import GalleryIcon from "@/app/ui/icons/gallery";

function FormInputWithTitle() {
  return (
    <div className="grid gap-y-3">
      <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
      <div className="h-14 w-full rounded-lg bg-[#EFF3FD]" />
    </div>
  );
}

export default function RentalFormSkeleton() {
  return (
    <div className="bg-[#F6F7F9] p-8">
      <div className="flex items-start gap-x-8">
        <div className="grid flex-1 basis-[30%] gap-y-8 *:bg-white *:p-6">
          <div>
            <div className="flex place-items-end justify-between pb-9">
              <div className="grid gap-y-2">
                <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
                <div className="h-4 w-[116px] rounded-lg bg-[#EFF3FD]" />
              </div>
              <p className="text-primary-300">Step 1 of 4</p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-9">
              <FormInputWithTitle />
              <FormInputWithTitle />
              <FormInputWithTitle />
              <FormInputWithTitle />
            </div>
          </div>
          <div>
            <div className="flex place-items-end justify-between pb-8">
              <div className="grid gap-y-2">
                <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
                <div className="h-4 w-[116px] rounded-lg bg-[#EFF3FD]" />
              </div>
              <p className="text-primary-300">Step 2 of 4</p>
            </div>
            <div className="mb-6 h-4 w-[116px] rounded-lg bg-primary-300" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-9">
              <FormInputWithTitle />
              <FormInputWithTitle />
              <FormInputWithTitle />
            </div>
            <div className="mb-6 mt-8 h-4 w-[116px] rounded-lg bg-primary-300" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-9">
              <FormInputWithTitle />
              <FormInputWithTitle />
              <FormInputWithTitle />
            </div>
          </div>
          <div>
            <div className="flex place-items-end justify-between pb-9">
              <div className="grid gap-y-2">
                <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
                <div className="h-4 w-[116px] rounded-lg bg-[#EFF3FD]" />
              </div>
              <p className="text-primary-300">Step 3 of 4</p>
            </div>
            <div className="grid gap-y-6">
              <div className="rounded-xl bg-[#F6F7F9] p-6">
                <div className="flex place-items-end justify-between pb-9">
                  <div className="flex place-items-center gap-x-4">
                    <div className="size-6 rounded-full border border-primary-300 bg-white" />
                    <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
                  </div>
                  <div className="h-4 w-[116px] rounded-lg bg-white" />
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-9">
                  <FormInputWithTitle />
                  <FormInputWithTitle />
                  <FormInputWithTitle />
                  <FormInputWithTitle />
                </div>
              </div>
              <div className="rounded-xl bg-[#F6F7F9] p-6">
                <div className="flex place-items-end justify-between">
                  <div className="flex place-items-center gap-x-4">
                    <div className="size-6 rounded-full border border-primary-300 bg-white" />
                    <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
                  </div>
                  <div className="h-4 w-[116px] rounded-lg bg-white" />
                </div>
              </div>
              <div className="rounded-xl bg-[#F6F7F9] p-6">
                <div className="flex place-items-end justify-between">
                  <div className="flex place-items-center gap-x-4">
                    <div className="size-6 rounded-full border border-primary-300 bg-white" />
                    <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
                  </div>
                  <div className="h-4 w-[116px] rounded-lg bg-white" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex place-items-end justify-between pb-9">
              <div className="grid gap-y-2">
                <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
                <div className="h-4 w-[116px] rounded-lg bg-[#EFF3FD]" />
              </div>
              <p className="text-primary-300">Step 4 of 4</p>
            </div>
            <div className="grid gap-y-6">
              <div className="rounded-xl bg-[#F6F7F9] p-6">
                <div className="flex place-items-center gap-x-4">
                  <div className="size-6 border border-primary-300 bg-white" />
                  <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
                </div>
              </div>
              <div className="rounded-xl bg-[#F6F7F9] p-6">
                <div className="flex place-items-center gap-x-4">
                  <div className="size-6 border border-primary-300 bg-white" />
                  <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white px-6 pb-9 pt-6">
          <div className="grid gap-y-2 pb-10">
            <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
            <div className="h-4 w-[116px] rounded-lg bg-[#EFF3FD]" />
          </div>
          <div className="flex place-items-center gap-x-4 border border-transparent border-b-navbar/40 pb-10">
            <div className="rounded-xl border-4 border-[#EFF3FD] p-4">
              <div className="rounded-xl bg-[#EFF3FD] px-[38px] py-[26px]">
                <GalleryIcon width={40} height={40} />
              </div>
            </div>
            <div className="grid gap-y-2">
              <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
              <div className="h-4 w-[116px] rounded-lg bg-[#EFF3FD]" />
            </div>
          </div>
          <div className="flex justify-between gap-y-2 pt-8">
            <div className="h-4 w-[100px] rounded-lg bg-[#EFF3FD]" />
            <div className="h-4 w-[100px] rounded-lg bg-primary-300" />
          </div>
          <div className="flex justify-between gap-y-2 pt-6">
            <div className="h-4 w-[100px] rounded-lg bg-[#EFF3FD]" />
            <div className="h-4 w-[100px] rounded-lg bg-primary-300" />
          </div>
          <div className="mt-8 h-[60px] rounded-2xl bg-[#EFF3FD]" />
          <div className="mt-9 flex justify-between">
            <div className="grid gap-y-2">
              <div className="h-4 w-[116px] rounded-lg bg-primary-300" />
              <div className="h-4 w-[116px] rounded-lg bg-[#EFF3FD]" />
            </div>
            <div className="w-[116px] rounded-lg bg-primary-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
