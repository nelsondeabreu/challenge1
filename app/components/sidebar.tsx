import { LayoutDashboard, Sun } from "lucide-react";
import Image from "next/image";
import Avatar from '../../public/christian-buehner-DItYlc26zVI-unsplash.jpg'
import Link from "next/link";


export function Sidebar() {
    return(
        <div className="flex h-screen bg-[#1F213A] flex-col items-center justify-between p-8
        text-white w-[600]">
            <div className="flex items-center justify-between mb-6">
                <Link href={''} className="flex items-center gap-2">
                    <LayoutDashboard/>
                </Link>
            </div>

            <div className="flex flex-col items-center justify-center">
                <Sun/>
                <span>_______</span>
                <Image className='w-10 h-10 rounded-full' src={Avatar} alt="avatar"/>
            </div>
        </div>
    )
}