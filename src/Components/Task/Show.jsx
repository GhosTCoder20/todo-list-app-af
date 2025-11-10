import { CiCalendar } from "react-icons/ci";
import { GoPencil, GoTrash } from "react-icons/go";

const ShowTasks = ({
  tasks,
  categories,
  onToggleComplete,
  onDelete,
  onEdit,
}) => {
  const getCategoryInfo = (categoryId) => {
    const category = categories?.find(
      (cat) => cat.id.toString() === categoryId?.toString()
    );
    return {
      name: category?.name,
      color: category?.colo,
    };
  };

  return (
    <>
      {tasks.length > 0
        ? tasks.map((c) => (
            <div
              key={c.id}
              className={`flex gap-3 relative h-[140px] overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-100/50 shadow-lg hover:-translate-y-2 hover:scale-105 hover:shadow-2xl transition-all duration-500 rounded-2xl p-4 ${
                c.completed ? "opacity-80" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={c.completed}
                onClick={() => onToggleComplete(c.id)}
                className="size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none mt-1"
              />
              <div className="flex-1 min-w-0">
                <h3
                  className={`text-[#222] mb-2 ${
                    c.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {c.title}
                </h3>

                <p
                  id="Category"
                  className={`text-white mb-2 inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs w-fit whitespace-nowrap shrink-0 gap-1`}
                  style={{
                    backgroundColor: getCategoryInfo(c.category).color,
                    opacity: c.completed ? 0.5 : 1,
                  }}
                >
                  {getCategoryInfo(c.category).name}
                </p>

                <div
                  id="Date"
                  className={`flex items-center gap-1 ${
                    c.completed ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <CiCalendar />
                  <p className="text-xs">{c.date}</p>
                </div>
              </div>

              <div className="flex self-start gap-2">
                <button
                  aria-label={`Edit ${c.title}`}
                  onClick={() => onEdit?.(c.id)}
                >
                  <GoPencil className="w-5 h-5 text-gray-500" />
                </button>
                <button
                  aria-label={`Delete ${c.title}`}
                  onClick={() => onDelete(c.id)}
                >
                  <GoTrash className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default ShowTasks;
