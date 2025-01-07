"use client";

import Image from "next/image";

import profile from "@/public/images/profile.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerIcon from "../icons/hamburger";
import HeartIcon from "../icons/heart";
import SettingsIcon from "../icons/settings";
import NavButton from "./navButton";
import NotificationsButton from "./notificationsButton";
import SearchInput from "./searchInput";

export default function Header() {
  const pathname = usePathname();

  const rentCarPath = pathname.includes("rentCar");

  return (
    <header className="border border-navbar/40 bg-white px-6 py-8 2xl:py-10 2xl:pe-8 2xl:ps-16">
      <div className="flex flex-col-reverse gap-y-8 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-x-16 gap-y-6 lg:basis-2/4 lg:flex-row">
          <Link
            className="self-start text-2xl font-bold text-primary-500 sm:text-2base lg:self-center"
            href="/"
          >
            MORENT
          </Link>
          {!rentCarPath && <SearchInput />}
        </div>
        <div className="flex items-center justify-between gap-x-5">
          <div className="hidden gap-x-5 lg:flex">
            <NavButton>
              <HeartIcon className="*:fill-secondary-400" />
            </NavButton>
            <NotificationsButton />
            <NavButton>
              <SettingsIcon />
            </NavButton>
          </div>
          <button className="lg:hidden">
            <HamburgerIcon />
          </button>
          <div className="relative size-7 cursor-pointer sm:size-11">
            <Image
              priority
              src={profile}
              sizes="100%"
              fill
              className="object-contain"
              alt="Profile picture"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
