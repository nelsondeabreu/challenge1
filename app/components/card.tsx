import { Dot, ChevronRight } from "lucide-react";
export function Card() {
  return(
    <div className="bg-[#1F213A] flex items-center justify-between p-8 mt-10 rounded-lg">
      <p className="text-white font-medium">#RT3080</p>
      <span className="text-zinc-300 font-light">tuesday 19 Aug 2021</span>
      <span className="text-zinc-300 font-light">Gerson Abreu</span>
      <strong className="text-white">£1,880.90</strong>
      <button className="bg-orange-500 bg-opacity-35 p-2 w-28 text-orange-400 rounded-md flex items-center justify-around"><Dot/>Pending </button>
      <ChevronRight className="text-[#7C5DF9]"/>
    </div>
  )
}