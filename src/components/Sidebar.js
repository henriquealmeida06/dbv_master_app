import { IoHomeOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { LuBrain } from "react-icons/lu";
import { BiBible } from "react-icons/bi";
import { LiaMedalSolid } from "react-icons/lia";
import perfil from './../img/perfil1.jpeg'
import Navbar from "./NavBar";
import { useState } from "react";

function Sidebar({}){

    const [ativo, setAtivo] = useState(false)

    function alternar(){
        setAtivo(!ativo)
        console.log(ativo)

    }

    

    
    return(
        <div className="">
            <Navbar onClick={alternar}/>
            
            
            
        <div className={`transition-transform duration-300 w-56 h-screen bg-slate-800 flex flex-col text-gray-200  lg:block py-20 fixed z-10 " ${ativo ? 'translate-x-0':'-translate-x-60'}`}>
            <div className="flex gap-3 items-center mb-5 px-3">
            <div className="rounded-full overflow-hidden h-12 w-12">
            <img src={perfil}/>
            </div>
            <p>Henrique Almeida</p>

            </div>
            <ul className="flex flex-col items-start gap-4 px-5 ">
                <li ><a className="flex justify-start items-center gap-4 " href="#"><span className="text-2xl"><IoHomeOutline /></span><p>Home</p></a></li>
                <li><a className="flex justify-start items-center gap-4 " href=""><span className="text-2xl"><GrGroup /></span><p>Unidade</p></a></li>
                <li><a className="flex justify-start items-center gap-4 " href=""><span className="text-2xl"><LuBrain /></span><p>Atividades</p></a></li>
                <li><a className="flex justify-start items-center gap-4 " href=""><span className="text-2xl"><BiBible /></span><p>Devocional</p></a></li>
                <li><a className="flex justify-start items-center gap-4 " href=""><span className="text-2xl"><LiaMedalSolid /></span><p>Conquistas</p></a></li>
                
            </ul>
           
            
            
            

            </div>
           
        </div>
    )
}
export default Sidebar;