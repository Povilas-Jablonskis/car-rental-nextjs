interface CarPropertyProps {
  icon: React.ComponentType<React.SVGAttributes<SVGElement>>;
  label: string;
}

export default function CarProperty({ icon: Icon, label }: CarPropertyProps) {
  return (
    <div className="flex items-center gap-x-1.5">
      <Icon className="size-3.5 sm:size-6" />
      <span className="font-medium text-secondary-300">{label}</span>
    </div>
  );
}
