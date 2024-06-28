'use client'
import { Dot, ChevronRight } from "lucide-react";
interface Props{
  name: string;
  date: string;
  amount: number;
}

export function Card(props:Props) {

  return(
    <div className="bg-[#1F213A] flex items-center justify-between p-8 mt-10 rounded-lg">
      <p className="text-white font-medium">#RT3080</p>
      <span className="text-zinc-300 font-light">{props.date}</span>
      <span className="text-zinc-300 font-light">{props.name}</span>
      <strong className="text-white">£{props.amount}</strong>
      <button className="bg-orange-500 bg-opacity-35 p-2 w-28 text-orange-400 rounded-md flex items-center justify-around"><Dot/>Pending </button>
      <ChevronRight className="text-[#7C5DF9]"/>
    </div>
  )
}