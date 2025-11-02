import './App.css';
import MainHeader from "./Components/MainPage/MainHeader"
import TaskDashboard from './Components/MainPage/Overview';
import AddTask from './Components/Task/Add'
import Tasks from './Components/Task/Tasks';
import { Link } from 'react-router';

function App() {
  return (

    <div className="App min-h-screen bg-gradient-to-br from-[#F8F9FB] via-[#E8EAF0] to-[#F8F9FB] transition-colors duration-500  space-y-6">
      <MainHeader/>
      <TaskDashboard/>
      <Tasks/>
      <AddTask/>
      <div className=' fixed right-6 bottom-20 lg:bottom-8 lg:right-8 z-40 p-8 rounded-full'>
        <Link to={"/AddTask"} className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-[#00C2A8] via-[#00B89F] to-[#9B6BFF] hover:shadow-[0_0_30px_rgba(0,194,168,0.5)] hover:rotate-90  hover:scale-[1.2] text-white border-4 border-white/20 backdrop-blur-xl transition-all duration-300'>
          +
        </Link>
      </div>
    </div>
  );
}

export default App;
