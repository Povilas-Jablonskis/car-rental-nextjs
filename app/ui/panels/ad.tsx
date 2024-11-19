import clsx from "clsx";

interface AdProps extends React.HTMLAttributes<HTMLDivElement> {
  subTitle?: string;
}

export default function Ad({
  className,
  title,
  subTitle,
  children,
  ...rest
}: AdProps) {
  return (
    <div
      {...rest}
      className={clsx(
        "rounded-lg bg-cover bg-no-repeat p-6 pb-2.5 text-white",
        className,
      )}
    >
      <p className="max-w-72 pb-4 text-2base font-semibold">{title}</p>
      <p className="max-w-72 pb-5 text-base font-medium">{subTitle}</p>
      {children}
    </div>
  );
}
