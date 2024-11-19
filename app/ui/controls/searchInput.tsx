import clsx from "clsx";

import FilterIcon from "../icons/filter";
import SearchIcon from "../icons/search";

export default function SearchInput({
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-1 xl:self-center">
      <div className="flex flex-1 rounded-s-xl border border-e-0 border-navbar/40 px-6 py-3 text-secondary-400 xl:rounded-s-full xl:px-5 xl:py-2.5">
        <SearchIcon className="me-5" />
        <input
          {...rest}
          className={clsx(
            "flex-1 text-sm font-medium placeholder:text-secondary-400",
            className,
          )}
          placeholder="Search something here"
        />
      </div>
      <button className="rounded-e-xl border border-s-0 border-navbar/40 pe-6 xl:rounded-e-full xl:py-2.5 xl:pe-5">
        <FilterIcon />
      </button>
    </div>
  );
}
