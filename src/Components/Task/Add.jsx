
import { useState } from 'react';

const AddTask = ({
  loading,
  task,
  setTaskInfo,
  category,
  createNewTask,
  isOpened,
  onCancel
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div
      className={
        isOpened
          ? "flex bg-black/65  fixed items-center justify-center z-[90] w-screen h-screen backdrop-blur-md -top-6 m-0"
          : "hidden"
      }
    >
      <div className="bg-white/80 w-full inline-block rounded-md p-6 shadow-lg max-w-[calc(100%-2rem)]  sm:max-w-[425px]">
        <div className=" sm:text-left text-center">
          <h2 className="text-lg">Add New Task</h2>
          <p className="text-sm text-[#717182] mb-4">
            Create a new task with category and due date
          </p>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">
            Task Title
          </label>
          <input
            type="text"
            value={task.title}
            onChange={setTaskInfo}
            required={true}
            name="title"
            placeholder="Enter task title...."
            className="placeholder:text-[#717182] transition-all duration-300 outline-none h-9 w-full rounded-md border px-3 py-1 my-2 text-base bg-[#f3f3f5] md:text-sm focus-visible:border-[#a1a1a1] focus-visible:ring-[#a1a1a1]/50 focus-visible:ring-[3px] "
          />
          <label className="text-sm font-medium mb-2">
            Category
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="focus-visible:ring-[#a1a1a1]/50 flex w-full items-center justify-between gap-2 rounded-md border bg-[#f3f3f5] px-3 py-2 my-2 text-sm whitespace-nowrap focus-visible:border-[#a1a1a1]"
            >
              {category.find(c => c.id.toString() === task.category)?.name || 'Select category'}
              <span className="ml-2">▼</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg">
                {category.length > 0 &&
                  category.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        setTaskInfo({
                          target: { name: 'category', value: c.id.toString() }
                        });
                        setIsDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      <div 
                        className="w-6 h-6 mr-2 rounded" 
                        style={{ backgroundColor: c.colo }}
                      />
                      {c.name}
                    </button>
                  ))}
              </div>
            )}
          </div>
          <label className="text-sm font-medium mb-2">
            Due Date
          </label>
          <input
            type="date"
            name="date"
            value={task.date}
            required={true}
            onChange={setTaskInfo}
            className="inline-flex items-center justify-between gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[#a1a1a1] focus-visible:ring-[#a1a1a1]/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-white  hover:bg-[#e9ebef] hover:text-[#030213] h-9 px-2 py-2  w-full text-left "
          />

          {/* Buttons for Add */}
          <div className="flex gap-3 pt-3">
            <button
              onClick={onCancel}
              className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all  outline-none focus-visible:border-[#a1a1a1] focus-visible:ring-[#a1a1a1]/50 focus-visible:ring-[3px]  border bg-[#fff]  hover:bg-[#e9ebef] hover:text-[#030213] h-9 px-4 py-2 "
            >
              Cancel
            </button>
            <button
              onClick={createNewTask}
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all  outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]  hover:bg-[#030213]/90 h-9 px-4 py-2  flex-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white"
            >
              Create task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTask;
