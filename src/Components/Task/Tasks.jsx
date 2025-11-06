import ShowTasks from "./Show";
import MainSelector from "./MainSelector";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Tasks = ({ loading, tasks, categories }) => {
  

  return (
    <>
      <MainSelector />
      <div className="ml-16 inline-flex flex-wrap items-center gap-3 p-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100/50">
        <div className="flex ">
          <CiFilter className="w-6 h-6 text-gray-400" />
          <span className="text-sm text-gray-600">: Filter</span>
        </div>
        <div>
          <button className="relative flex items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none w-[180px] bg-white/50 backdrop-blur-sm border-gray-200/50">
            <span data-slot="select-value">All categories</span>
            <span>
              <IoIosArrowDown />
            </span>
          </button>
          <ul className=" absolute bg-white w-[180px] p-1 hidden">
            <li className="p-2">All Categorie</li>
            <li className="p-2 flex items-center hover:bg-gray-400 rounded-lg">
              <div className="w-3 h-3 mr-3 bg-orange-700 rounded-full"></div>{" "}
              Work
            </li>
            <li className="p-2 flex items-center hover:bg-gray-400 rounded-lg">
              <div className="w-3 h-3 mr-3 bg-orange-700 rounded-full"></div>{" "}
              Personal
            </li>
            <li className="p-2 flex items-center hover:bg-gray-400 rounded-lg">
              <div className="w-3 h-3 mr-3 bg-orange-700 rounded-full"></div>{" "}
              Home
            </li>
            <li className="p-2 flex items-center hover:bg-gray-400 rounded-lg">
              <div className="w-3 h-3 mr-3 bg-orange-700 rounded-full"></div>{" "}
              Shopping
            </li>
            <li className="p-2 flex items-center hover:bg-gray-400 rounded-lg">
              <div className="w-3 h-3 mr-3 bg-orange-700 rounded-full"></div>{" "}
              Health
            </li>
          </ul>
        </div>
        <div>
          <input type="date" name="Date" id="Date" />
        </div>
      </div>
      <div className="mx-16 ">
        <h1 className="mb-8">
          <p className="inline">{tasks.length}</p> Tasks
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            <h1>Loading....</h1>
          ) : tasks.length > 0 ? (
            <ShowTasks tasks={tasks} categories={categories} />
          ) : (
            <h1 className="text-gray-500">No tasks found. Create your first task!</h1>
          )}
        </div>
      </div>
    </>
  );
};
export default Tasks;
