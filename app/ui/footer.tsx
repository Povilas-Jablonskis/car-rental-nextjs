export default function Footer() {
  return (
    <footer className="px-16 py-20">
      <div className="flex pb-9 border-b border-[#131313]/[.16] place-content-between">
        <div className="flex flex-col gap-4">
          <span className="text-primary-500 text-2base font-bold">MORENT</span>
          <span className="font-medium text-base text-[#131313]/[.6] max-w-[292px]">
            Our vision is to provide convenience and help increase your sales business.
          </span>
        </div>
        <div className="flex *:px-16">
          <div className="grid gap-4">
            <span className="font-semibold text-xl text-secondary-500">About</span>
            <span className="font-medium text-base text-[#131313]/[.6]">How it works</span>
            <span className="font-medium text-base text-[#131313]/[.6]">Featured</span>
            <span className="font-medium text-base text-[#131313]/[.6]">Partnership</span>
            <span className="font-medium text-base text-[#131313]/[.6]">Bussiness Relation</span>
          </div>
          <div className="grid gap-4">
            <span className="font-semibold text-xl text-secondary-500">Community</span>
            <span className="font-medium text-base text-[#131313]/[.6]">Events</span>
            <span className="font-medium text-base text-[#131313]/[.6]">Blog</span>
            <span className="font-medium text-base text-[#131313]/[.6]">Podcast</span>
            <span className="font-medium text-base text-[#131313]/[.6]">Invite a friend</span>
          </div>
          <div className="grid gap-4">
            <span className="font-semibold text-xl text-secondary-500">Socials</span>
            <span className="font-medium text-base text-[#131313]/[.6]">Discord</span>
            <span className="font-medium text-base text-[#131313]/[.6]">Instagram</span>
            <span className="font-medium text-base text-[#131313]/[.6]">Twitter</span>
            <span className="font-medium text-base text-[#131313]/[.6]">Facebook</span>
          </div>
        </div>
      </div>
      <div className="flex place-content-between pt-9">
        <span className="text-secondary-500 text-base font-semibold">
          ©2022 MORENT. All rights reserved
        </span>
        <div className="flex gap-16">
          <span className="text-secondary-500 text-base font-semibold">Privacy & Policy</span>
          <span className="text-secondary-500 text-base font-semibold">Terms & Condition</span>
        </div>
      </div>
    </footer>
  );
}
