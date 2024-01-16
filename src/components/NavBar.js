import { GiHamburgerMenu } from "react-icons/gi";
import Mochila from './../img/mochila.svg';
import { FaPowerOff } from "react-icons/fa";

function Navbar(){
    return(
        <div className="flex px-5 py-2 w-screen bg-slate-800 text-white fixed">
            <div className=" w-56 flex justify-center items-center">
            <img className="w-11 rounded-full" src={Mochila}/>
            </div>
            <div className="  flex flex-1 justify-between items-center px-10 ">
                <span className="text-xl cursor-pointer"><GiHamburgerMenu /></span>
                <p className="font-semibold text-lg tracking-widest ">DBV <span>MASTER</span></p>
                <li className="list-none text-lg cursor-pointer"><FaPowerOff /></li>
            </div>
        </div>
    )
}
export default Navbar;