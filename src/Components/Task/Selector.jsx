import { FaRegChartBar } from "react-icons/fa";

const Selector = () => {
  return (
    <>
      <div className="flex ml-16 text-[#717182] h-9 w-fit rounded-xl items-center justify-center bg-white/80 backdrop-blur-xl border-0 shadow-lg p-1">
        <button data-state="active" className="focus-visible:border-[#a1a1a1] focus-visible:ring-[#a1a1a1]/50 focus-visible:outline-[#a1a1a1] text-black inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00C2A8] data-[state=active]:to-[#00A892] data-[state=active]:text-white">
          Tasks
        </button>
        <button data-state="inactive" className="focus-visible:border-[#a1a1a1] focus-visible:ring-[#a1a1a1]/50 focus-visible:outline-[#a1a1a1] text-black inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1">
          <FaRegChartBar className="text-lg"/>
          Staticts
        </button>
      </div>
    </>
  );
};
export default Selector;
