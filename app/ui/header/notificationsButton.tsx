import NotificationsIcon from "../icons/notifications";

export default function NotificationsButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      className="relative rounded-full border border-navbar/40 p-[9px]"
    >
      <NotificationsIcon />
      <span className="absolute right-0 top-0 size-[11px] rounded-full bg-[#FF4423] text-[7px] leading-[0.75rem] text-white" />
    </button>
  );
}
