import { useEffect, useState } from "react";
import "./App.css";
import { MainHeader, TaskDashboard, AddTask, Tasks } from "./Components";
import { getAllTasks, getAllCategory } from "./Services/taskServices";
import { Link, useNavigate } from "react-router";
import { Route,Routes } from "react-router";

function App() {
  const [loading, setLoading] = useState(false);
  const [ForceRender, setForceRender] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [category, setCategory] = useState([]);
  const [task, setTask] = useState({
    title: "",
    category: "",
    date: "",
  });

  const navigate = useNavigate();

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
  }, []);

  // After creating task
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: tasksData } = await getAllTasks();

        setLoading(false);
      } catch (error) {
        console.log(error.massage);
        setLoading(false);
      }
    };

    fetchData();
  }, [ForceRender]);

  // Create and post new task Database
  const createNewTask = async (event) => {
    event.preventDefault();
    try {
      const { status } = await createNewTask(task);
      if (status === 201) {
        setTask({});
        setForceRender(!ForceRender);
        navigate("/");
      }
    } catch (error) {
      console.log(error.massage);
    }
  };

  const setTaskInfo = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="App min-h-screen bg-gradient-to-br from-[#F8F9FB] via-[#E8EAF0] to-[#F8F9FB] transition-colors duration-500  space-y-6">
      <MainHeader />
      <TaskDashboard />
      <Tasks loading={loading} tasks={tasks} />
      <Routes>
        <Route
          path="/AddTasks"
          element={
            <AddTask
              loading={loading}
              task={task}
              setTaskInfo={setTaskInfo}
              category={category}
              createNewTask={createNewTask}
            />
          }
        />
      </Routes>
      <div className=" fixed right-6 bottom-20 lg:bottom-8 lg:right-8 z-40 p-8 rounded-full">
        <Link
          to={"/AddTask"}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-[#00C2A8] via-[#00B89F] to-[#9B6BFF] hover:shadow-[0_0_30px_rgba(0,194,168,0.5)] hover:rotate-90  hover:scale-[1.2] text-white border-4 border-white/20 backdrop-blur-xl transition-all duration-300"
        >
          +
        </Link>
      </div>
    </div>
  );
}

export default App;
