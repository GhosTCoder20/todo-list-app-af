import { WiDaySunny } from "react-icons/wi";
import { LuMoon } from "react-icons/lu";
import Login from "./Login";
import { CiCircleCheck } from "react-icons/ci";

const MainHeader = () => {
  return (
    <header className=" flex justify-around mb-6 py-5 sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100/50 backdrop-blur-sm border border-gray-200/50">
        <WiDaySunny className="lucide lucide-sun w-5 h-5 text-gray-600" />
        <LuMoon className=" hidden" />
        <button
          role="switch"
          aria-checked="false"
          data-state="unchecked"
          value='on'
          data-slot="switch"
          className="peer data-[state=checked]:bg-[#030213] data-[state=unchecked]:bg-[#cbced4] focus-visible:border-[#a1a1a1] focus-visible:[#a1a1a1]  inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span
            data-state="unchecked"
            data-slot="switch-thumb"
            class="bg-[#fff]  pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          ></span>
        </button>
      </div>
      <div className="flex">
        <div className="relative w-10 h-10 bg-gradient-to-br from-[#00C2A8] via-[#00B89F] to-[#9B6BFF] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
          <CiCircleCheck className=" text-white w-[30px] h-[30px]" />
        </div>
        <div className=" ml-3 text-">
          <h1 className="bg-gradient-to-r from-[#00C2A8] via-[#00B89F] to-[#9B6BFF] bg-clip-text text-transparent">
            ToDolist App
          </h1>
          <p className="text-xs text-gray-500 dark:text-[#A0A0A0]">
            Organize your life
          </p>
        </div>
      </div>
      <Login />
    </header>
  );
};
export default MainHeader;
