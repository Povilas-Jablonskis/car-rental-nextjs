import clsx from "clsx";

import FilterIcon from "../icons/filter";
import SearchIcon from "../icons/search";

export default function SearchInput({
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-1 rounded-full border border-navbar/40 px-5 py-2.5 text-secondary-400">
      <SearchIcon className="me-5" />
      <input
        {...rest}
        className={clsx(
          "flex-1 font-medium text-secondary-400 placeholder:font-medium placeholder:text-secondary-400",
          className,
        )}
        placeholder="Search something here"
      />
      <button className="ms-5">
        <FilterIcon />
      </button>
    </div>
  );
}
