import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCoin } from "react-icons/bs";




function Navbar({onClick}){

    

    return(
        <div className="flex py-4 w-screen  lg:bg-slate-800 text-white fixed z-20 ">
            
            <div className="  flex flex-1 justify-between items-center px-5 ">

                <span onClick={onClick} className="text-xl cursor-pointer lg:bg-transparent lg:p-0 bg-slate-800 rounded-full p-3"><GiHamburgerMenu /></span>
                <p className="font-semibold text-lg tracking-widest hidden lg:inline-flex">DBV MASTER</p>
               <div className="bg-slate-800 w-1/3 px-4 py-2 flex gap-1 items-center justify-center cursor-pointer rounded-full lg:hidden">
                
               <span className="text-2xl text-yellow-500 "><BsCoin /></span>
                <p className="text-2xl">143</p>
                
               </div>
                <div className="flex">
                
                <span className="text-2xl items-center cursor-pointer  bg-slate-800 rounded-full p-3"><IoMdNotificationsOutline /></span>
                </div>
                
            </div>
        </div>
    )
}
export default Navbar;