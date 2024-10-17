import NotificationsIcon from "../icons/notifications";

export default function NotificationsButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="relative border border-navbar border-opacity-40 p-[9px] rounded-full"
    >
      <NotificationsIcon />
      <span className="bg-[#FF4423] rounded-full text-white text-[7px] absolute top-0 right-0 w-[11px] h-[11px] leading-[0.75rem]" />
    </button>
  );
}
