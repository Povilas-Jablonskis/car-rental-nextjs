import Image from "next/image";

import profile from "@/public/images/profile.png";
import Link from "next/link";
import SearchInput from "../controls/searchInput";
import HeartIcon from "../icons/heart";
import SettingsIcon from "../icons/settings";
import NavButton from "./navButton";
import NotificationsButton from "./notificationsButton";

export default function Header() {
  return (
    <header className="min-h-[123px] border border-navbar/40 px-16 py-10">
      <div className="flex place-content-between">
        <div className="flex basis-[53%] items-center gap-x-16">
          <span className="text-2base font-bold text-primary-500">
            <Link href="/">MORENT</Link>
          </span>
          <SearchInput />
        </div>
        <div className="flex items-center gap-x-5">
          <NavButton>
            <HeartIcon />
          </NavButton>
          <NotificationsButton />
          <NavButton>
            <SettingsIcon />
          </NavButton>
          <button>
            <Image priority src={profile} alt="Profile picture" />
          </button>
        </div>
      </div>
    </header>
  );
}
