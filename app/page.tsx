import { Card } from "./components/card";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  return (
    <main className="flex flex-1 bg-[#141625]">
      <Sidebar/>

      <div className="m-auto">
        <Header/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      
    </main>
  );
}
