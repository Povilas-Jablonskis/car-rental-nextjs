import { ITEMS_PER_PAGE } from "@/app/lib/data";
import ListItemSkeleton from "../listItemSkeleton";

export default function CarListSkeleton() {
  return (
    <div>
      <div className="flex place-content-between mb-8">
        <span className="text-secondary-300 font-semibold text-base">Popular Cars</span>
        <button className="text-primary-500 font-semibold text-base text-end" disabled>
          View All
        </button>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {[...Array(ITEMS_PER_PAGE)].map((_, idx) => (
          <ListItemSkeleton key={idx} />
        ))}
      </div>
    </div>
  );
}
