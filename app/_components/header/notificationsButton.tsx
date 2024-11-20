import clsx from "clsx";
import NotificationsIcon from "../icons/notifications";

export default function NotificationsButton({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={clsx(
        "relative rounded-full border border-navbar/40 p-2",
        className,
      )}
    >
      <NotificationsIcon />
      <span className="absolute right-0 top-0 size-2.5 rounded-full bg-[#FF4423] text-[7px] leading-3 text-white" />
    </button>
  );
}
