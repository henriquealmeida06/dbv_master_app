import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";




function Navbar({onClick}){

    

    return(
        <div className="flex py-4 w-screen  lg:bg-slate-800 text-white fixed z-20 ">
            
            <div className="  flex flex-1 justify-between items-center px-5 ">
                <span onClick={onClick} className="text-xl cursor-pointer lg:bg-transparent lg:p-0 bg-slate-800 rounded-full p-3"><GiHamburgerMenu /></span>
                <p className="font-semibold text-lg tracking-widest hidden lg:inline-flex">DBV MASTER</p>
                <div>
                <span className="text-2xl"><IoMdNotificationsOutline /></span>
                </div>
                
            </div>
        </div>
    )
}
export default Navbar;