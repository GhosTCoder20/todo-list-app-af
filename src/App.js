import { useEffect, useState } from "react";
import "./App.css";
import { MainHeader, TaskDashboard, AddTask, Tasks } from "./Components";
import {
  getAllTasks,
  getAllCategory,
  createTask,
  updateTask,
  deleteTask,
} from "./Services/taskServices";
import { Link, useNavigate } from "react-router";
import { Route, Routes } from "react-router";

function App() {
  const [loading, setLoading] = useState(false);
  const [ForceRender, setForceRender] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [category, setCategory] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [task, setTask] = useState({
    title: "",
    category: "",
    date: "",
    completed: false,
  });

  //Navigate after fetching tasks
  const navigate = useNavigate();

  //Fetch all tasks and cetegories for showing
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: task } = await getAllTasks();
        const { data: category } = await getAllCategory();
        setTasks(task);
        setCategory(category);
        setLoading(false);
      } catch (error) {
        console.log(error.massage);
        setLoading(false);
      }
    };

    fetchData();
    console.log("build");
  }, []);

  // After creating task
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: task } = await getAllTasks();
        setTasks(task);
        setLoading(false);
      } catch (error) {
        console.log(error.massage);
        setLoading(false);
      }
    };

    fetchData();
    console.log("Update");
  }, [ForceRender]);

  //------------------------All tasks Events------------------------[START]

  // Create and post new task Database
  const createNewTask = async (event) => {
    event.preventDefault();
    try {
      const { status } = await createTask(task);
      if (status === 201) {
        setTask({
          title: "",
          category: "",
          date: "",
          completed: false,
        });
        setForceRender(!ForceRender);
        navigate("/");
      }
      setIsOpened(false);
    } catch (error) {
      console.error("Error creating task:", error.message);
      setIsOpened(false);
    }
  };

  const setTaskInfo = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  // Toggle task completed state (optimistic UI + server update)
  const toggleTaskComplete = async (taskId) => {
    const existing = tasks.find((task) =>
      taskId === task.id ? task : console.log("Not Fund")
    );
    console.log("existing complete", existing);

    const updated = { ...existing, completed: !existing.completed };

    // optimistic update
    setTasks((prev) => prev.map((t) => (t.id === taskId ? updated : t)));

    try {
      await updateTask(updated, taskId);
    } catch (err) {
      console.error("Failed to update task:", err?.message || err);
      // rollback
      setTasks((prev) => prev.map((t) => (t.id === taskId ? existing : t)));
    }
  };
  //Delete tasks
  const onDelete = (taskId) => {
    deleteTask(taskId);
    setForceRender((prevforceRender) => !prevforceRender);
  };

  const completedTasks = tasks.filter((t) => (t.completed === true));

  const pendingTasks = tasks.filter((t) => (t.completed === false));

  //------------------------All tasks Events------------------------[END]

  return (
    <div className="App min-h-screen bg-gradient-to-br from-[#F8F9FB] via-[#E8EAF0] to-[#F8F9FB] transition-colors duration-500  space-y-6 pb-10">
      <MainHeader />
      <TaskDashboard tasks={tasks} completedTasks={completedTasks} pendingTasks={pendingTasks} />
      <Tasks
        loading={loading}
        tasks={tasks}
        categories={category}
        onToggleComplete={toggleTaskComplete}
        onDelete={onDelete}
        pendingTasks={pendingTasks}
        completedTasks={completedTasks}
      />
      <Routes>
        <Route
          path="/AddTask"
          element={
            <AddTask
              loading={loading}
              task={task}
              setTaskInfo={setTaskInfo}
              category={category}
              createNewTask={createNewTask}
              isOpened={isOpened}
              onCancel={() => {
                setIsOpened(false);
                navigate("/");
              }}
            />
          }
        />
      </Routes>
      <div className=" fixed right-6 bottom-10 lg:bottom-5 lg:right-8 z-40 p-2 rounded-full">
        <Link
          to={"/AddTask"}
          onClick={() => setIsOpened(!isOpened)}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-[#00C2A8] via-[#00B89F] to-[#9B6BFF] hover:shadow-[0_0_30px_rgba(0,194,168,0.5)] hover:rotate-90  hover:scale-[1.2] text-white border-4 border-white/20 backdrop-blur-xl transition-all duration-300"
        >
          +
        </Link>
      </div>
    </div>
  );
}

export default App;
