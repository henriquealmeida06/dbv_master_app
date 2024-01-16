import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

function Sidebar(){
    return(
        <div className="w-16 h-screen bg-slate-800 flex flex-col text-gray-200 justify-start items-center gap-5 py-8 fixed mt-14 ">
            <span className="text-2xl"><FaHome /></span>
            <span className="text-2xl"><FaPeopleGroup /></span>
            <span className="text-2xl"></span>
            <span className="text-2xl"></span>
            <span className="text-2xl"></span>
            <span className="text-2xl"></span>
            <span className="text-2xl"></span>
            

        </div>
    )
}
export default Sidebar;