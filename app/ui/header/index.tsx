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
    <header className="min-h-[123px] px-16 py-10 border-navbar border-opacity-40 border">
      <div className="flex place-content-between">
        <div className="flex items-center gap-16">
          <span className="text-primary-500 text-2base font-bold">
            <Link href="/">MORENT</Link>
          </span>
          <SearchInput />
        </div>
        <div className="flex items-center gap-5">
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
