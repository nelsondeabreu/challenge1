import { ChevronDown, Plus } from "lucide-react";

export function Header() {
    return(
        <div className="flex items-center justify-between gap-40">
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-white">Invoices</h2>
                <p className="text-zinc-200 ">
                    There are 7 total invoices.
                </p>
            </div>
            
            <div className="flex items-center justify-between gap-8">
                <div className="flex">
                    <p className="text-white font-medium">
                        Filter by Status 
                    </p>
                    <span className="text-white">
                        <ChevronDown/>
                    </span>
                </div>
                
                <button className="w-38 h-7 p-6 bg-[#7C5DF9] flex items-center justify-between rounded-full">
                   <Plus/> New invoices
                </button>

            </div>
        </div>
    )
}