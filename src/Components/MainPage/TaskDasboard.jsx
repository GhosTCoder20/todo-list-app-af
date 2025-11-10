import { CiClock2 } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { FaListCheck } from "react-icons/fa6";

const TaskDashboard = ({ tasks = [], completedTasks = [], pendingTasks = [] }) => {
  return (
    <div className="flex justify-center h-96">
      <div className="flex flex-col justify-between w-[60vw] mx-auto relative p-6 gap-6 rounded-xl overflow-hidden bg-gradient-to-br from-[#00C2A8] via-[#00B89F] to-[#9B6BFF] border-0 text-white shadow-2xl">
        <div>
          <h2 className="text-xl">Todays progress</h2>
          <p className="text-sm opacity-80 mt-1">Keep up the great work!</p>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-6">
            <pre>
              <p className="Completed inline">{completedTasks.length}</p> of{" "}
              <p className="total inline">{tasks.length}</p> Completed{" "}
            </pre>
            <p className="percentage">
              {tasks?.length ? Math.round((completedTasks.length / tasks.length) * 100) : 0}%
            </p>
          </div>
          <div className="relative">
            <div className="progress-bar relative w-full overflow-hidden rounded-full bg-white/20 h-3"></div>
            <div 
              className="absolute top-0 left-0 h-3 bg-white/40 rounded-full transition-all duration-500"
              style={{ 
                width: `${tasks.length ? Math.round((completedTasks.length / tasks.length) * 100) : 0}%`
              }}
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <section className="Done-bx relative py-9 bg-white/20 backdrop-blur-md rounded-xl flex flex-col items-center border border-white/30 shadow-lg">
            <CiCircleCheck className="text-2xl"/>
            <p className="text-3xl">{completedTasks?.length || 0}</p>
            <p className="opacity-80 text-xs">Done</p>
          </section>
          <section className="Pending-bx relative py-9 bg-white/20 backdrop-blur-md rounded-xl p-4 flex flex-col items-center border border-white/30 shadow-lg">
            <CiClock2  className="text-2xl"/>
            <p className="text-3xl">{pendingTasks?.length || 0}</p>
            <p className="opacity-80 text-xs">Pending</p>
          </section>
          <section className="Total-bx relative py-9 bg-white/20 backdrop-blur-md rounded-xl p-4 flex flex-col items-center border border-white/30 shadow-lg">
            <FaListCheck className="text-2xl"/>
            <p className="text-3xl">{tasks?.length || 0}</p>
            <p className="opacity-80 text-xs">Total</p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default TaskDashboard;
