import clsx from "clsx";

import FilterIcon from "../icons/filter";
import SearchIcon from "../icons/search";

export default function SearchInput({ className, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="min-w-[492px] flex border rounded-full border-navbar border-opacity-40 py-2.5 px-5 text-secondary-400">
      <SearchIcon className="me-5" />
      <input
        {...rest}
        className={clsx(
          "flex-1 placeholder:text-secondary-400 placeholder:font-medium text-secondary-400 font-medium",
          className
        )}
        placeholder="Search something here"
      />
      <button className="ms-5">
        <FilterIcon />
      </button>
    </div>
  );
}
