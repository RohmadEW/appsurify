import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Pagination() {
  return (
    <div className="flex items-center gap-1 justify-center">
      <button className="btn btn-sm btn-ghost btn-primary">
        <BiChevronLeft className="w-[20px] h-[20px]" />
      </button>
      <button className="btn btn-sm btn-outline btn-primary font-normal">
        1
      </button>
      <button className="btn btn-sm btn-ghost btn-primary font-normal">
        2
      </button>
      <button className="btn btn-sm btn-ghost btn-primary font-normal">
        3
      </button>
      <button className="btn btn-sm btn-ghost btn-primary">
        <BiChevronRight className="w-[20px] h-[20px]" />
      </button>
    </div>
  );
}
