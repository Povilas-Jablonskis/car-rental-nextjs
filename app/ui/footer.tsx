export default function Footer() {
  return (
    <footer className="px-16 py-20">
      <div className="flex place-content-between border-b border-[#131313]/[.16] pb-9">
        <div className="flex flex-col gap-y-4">
          <span className="text-2base font-bold text-primary-500">MORENT</span>
          <span className="max-w-[292px] text-base font-medium text-[#131313]/[.6]">
            Our vision is to provide convenience and help increase your sales
            business.
          </span>
        </div>
        <div className="flex *:px-16">
          <div className="grid gap-y-4">
            <span className="text-xl font-semibold text-secondary-500">
              About
            </span>
            <a href="" className="text-base font-medium text-[#131313]/[.6]">
              How it works
            </a>
            <a href="" className="text-base font-medium text-[#131313]/[.6]">
              Featured
            </a>
            <a href="" className="text-base font-medium text-[#131313]/[.6]">
              Partnership
            </a>
            <a href="" className="text-base font-medium text-[#131313]/[.6]">
              Bussiness Relation
            </a>
          </div>
          <div className="grid gap-y-4">
            <span className="text-xl font-semibold text-secondary-500">
              Community
            </span>
            <a href="" className="text-base font-medium text-[#131313]/[.6]">
              Events
            </a>
            <a href="" className="text-base font-medium text-[#131313]/[.6]">
              Blog
            </a>
            <a href="" className="text-base font-medium text-[#131313]/[.6]">
              Podcast
            </a>
            <a href="" className="text-base font-medium text-[#131313]/[.6]">
              Invite a friend
            </a>
          </div>
          <div className="grid gap-y-4">
            <span className="text-xl font-semibold text-secondary-500">
              Socials
            </span>
            <a href="" className="text-base font-medium text-[#131313]/[.6]">
              Discord
            </a>
            <a href="" className="text-base font-medium text-[#131313]/[.6]">
              Instagram
            </a>
            <a href="" className="text-base font-medium text-[#131313]/[.6]">
              Twitter
            </a>
            <a href="" className="text-base font-medium text-[#131313]/[.6]">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="flex place-content-between pt-9">
        <span className="text-base font-semibold text-secondary-500">
          ©2022 MORENT. All rights reserved
        </span>
        <div className="flex gap-x-16">
          <a href="" className="text-base font-semibold text-secondary-500">
            Privacy & Policy
          </a>
          <a href="" className="text-base font-semibold text-secondary-500">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
}
