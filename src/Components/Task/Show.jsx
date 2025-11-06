import { CiCalendar } from "react-icons/ci";
import { GoPencil, GoTrash } from "react-icons/go";

const ShowTasks = ({ tasks, categories }) => {
  const getCategoryInfo = (categoryId) => {
    const category = categories?.find(cat => cat.id.toString() === categoryId?.toString());
    return {
      name: category?.name || 'Unknown',
      color: category?.colo || 'gray'
    };
  };


 return (
    <>
      {tasks.length > 0 ? tasks.map((c) => (
        <div
          key={c.id}
          className="text-black flex gap-3 relative overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-100/50 shadow-lg hover:-translate-y-2 hover:scale-105 hover:shadow-2xl transition-all duration-500 rounded-2xl p-4"
        >
          <button
            type="button"
            role="checkbox"
            aria-checked={c.completed ? "true" : "false"}
            data-state={c.completed ? "checked" : "unchecked"}
            className="bg-[#f3f3f5] size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none mt-1"
          ></button>

          <div className="flex-1 min-w-0">
            <h3 className="text-[#222] mb-2">{c.title}</h3>

            <p
              id="Category"
              className="text-white mb-2 inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs w-fit whitespace-nowrap shrink-0 gap-1"
              style={{ backgroundColor: getCategoryInfo(c.category).color }}
            >
              {getCategoryInfo(c.category).name}
            </p>

            <div id="Date" className="flex items-center gap-1 text-gray-500">
              <CiCalendar />
              <p className="text-xs">{c.date}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button aria-label={`Edit ${c.title}`}>
              <GoPencil />
            </button>
            <button aria-label={`Delete ${c.title}`}>
              <GoTrash />
            </button>
          </div>
        </div>
      )): null}
    </>
  );
};

export default ShowTasks;
