'use client'
import { useEffect, useState } from "react";
import { Card } from "./components/card";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { getLocalStorage } from "./components/utils/localStorage";

interface Props{
  name: string
  date: string
  amount: number
}


export default function Home() {
  const [localData , setLocaldata] = useState<Props[]>([])
  useEffect(()=>{

    const datalocal = getLocalStorage('bd_chall1')

    if(datalocal){
      setLocaldata(datalocal)
    }

  }, [])
  
  return (
    <main className="flex flex-1 bg-[#141625]">
      <Sidebar/>

      <div className="m-auto">
        <Header/>
        {
          localData.map((item , index)=>{
            return <Card key={index} name={item.name} amount={item.amount} date={item.date} />
          })
        }
      </div>
      
    </main>
  );
}
