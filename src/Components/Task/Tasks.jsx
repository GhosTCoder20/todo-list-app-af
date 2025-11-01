import ShowTasks from "./Show";
import Selector from "./Selector"
const Tasks = () => {
  return (
    <>
    <Selector/>
      <div className="ml-16 inline-flex overflow-hidden flex-wrap items-center gap-3 p-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100/50">
        <div>
          <select name="Category" id="Category">
            <option value={"all"}>
              All category
            </option>
            <option value={"Work"}>
              Work
            </option>
            <option value={"Personal"}>
              Personal
            </option>
            <option value={"Home"}>
              Home
            </option>
          </select>
        </div>
        <div>
          <input type="date" name="Date" id="Date" />
        </div>
      </div>
      <div>
        <h1>
          <p className="inline">0</p> Tasks
        </h1>
        <ShowTasks />
      </div>
    </>
  );
};
export default Tasks;
