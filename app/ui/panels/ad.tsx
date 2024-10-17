import clsx from "clsx";

interface AdProps extends React.HTMLAttributes<HTMLDivElement> {
  subTitle?: string;
}

export default function Ad({ className, title, subTitle, children, ...rest }: AdProps) {
  return (
    <div
      {...rest}
      className={clsx("p-6 pb-[10px] text-white rounded-lg bg-cover bg-no-repeat", className)}
    >
      <p className="text-2base font-semibold max-w-[273px] pb-4">{title}</p>
      <p className="text-base font-medium max-w-[273px] pb-5">{subTitle}</p>
      {children}
    </div>
  );
}
