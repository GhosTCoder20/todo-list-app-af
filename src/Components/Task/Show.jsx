import { CiCalendar } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";

const ShowTasks = () => {
  return (
    <div className="">
      <div className="text-black flex gap-3 relative overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-100/50 shadow-lg hover:translate-y-[-10px] hover:scale-[1.05] hover:shadow-2xl transition-all duration-500 rounded-2xl p-4">
        <button
          type="button"
          role="checkbox"
          aria-checked="false"
          data-state="unchecked"
          className="bg-[#f3f3f5] size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none mt-1"
        ></button>
        <div className="flex-1 min-w-0">
          <h3 className="text-[#222] mb-2">Title</h3>
          <p id="Category" className="text-white mb-2 inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs w-fit whitespace-nowrap shrink-0 gap-1 bg-teal-500">Personal</p>
          <div id="Date" className="flex items-center gap-1 text-gray-500">
            <CiCalendar />
            <p className="text-xs">01/12/2025</p>
          </div>
        </div>
        <div>
            <button>
                <GoPencil />
            </button>
            <button>
                <GoTrash />
            </button>
        </div>
      </div>
    </div>
  );
};
export default ShowTasks;
