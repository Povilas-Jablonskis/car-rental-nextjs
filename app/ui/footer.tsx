export default function Footer() {
  return (
    <footer className="px-16 py-20">
      <div className="flex place-content-between border-b border-[#131313]/[.16] pb-9">
        <div className="flex flex-col gap-4">
          <span className="text-2base font-bold text-primary-500">MORENT</span>
          <span className="max-w-[292px] text-base font-medium text-[#131313]/[.6]">
            Our vision is to provide convenience and help increase your sales
            business.
          </span>
        </div>
        <div className="flex *:px-16">
          <div className="grid gap-4">
            <span className="text-xl font-semibold text-secondary-500">
              About
            </span>
            <span className="text-base font-medium text-[#131313]/[.6]">
              How it works
            </span>
            <span className="text-base font-medium text-[#131313]/[.6]">
              Featured
            </span>
            <span className="text-base font-medium text-[#131313]/[.6]">
              Partnership
            </span>
            <span className="text-base font-medium text-[#131313]/[.6]">
              Bussiness Relation
            </span>
          </div>
          <div className="grid gap-4">
            <span className="text-xl font-semibold text-secondary-500">
              Community
            </span>
            <span className="text-base font-medium text-[#131313]/[.6]">
              Events
            </span>
            <span className="text-base font-medium text-[#131313]/[.6]">
              Blog
            </span>
            <span className="text-base font-medium text-[#131313]/[.6]">
              Podcast
            </span>
            <span className="text-base font-medium text-[#131313]/[.6]">
              Invite a friend
            </span>
          </div>
          <div className="grid gap-4">
            <span className="text-xl font-semibold text-secondary-500">
              Socials
            </span>
            <span className="text-base font-medium text-[#131313]/[.6]">
              Discord
            </span>
            <span className="text-base font-medium text-[#131313]/[.6]">
              Instagram
            </span>
            <span className="text-base font-medium text-[#131313]/[.6]">
              Twitter
            </span>
            <span className="text-base font-medium text-[#131313]/[.6]">
              Facebook
            </span>
          </div>
        </div>
      </div>
      <div className="flex place-content-between pt-9">
        <span className="text-base font-semibold text-secondary-500">
          ©2022 MORENT. All rights reserved
        </span>
        <div className="flex gap-16">
          <span className="text-base font-semibold text-secondary-500">
            Privacy & Policy
          </span>
          <span className="text-base font-semibold text-secondary-500">
            Terms & Condition
          </span>
        </div>
      </div>
    </footer>
  );
}
