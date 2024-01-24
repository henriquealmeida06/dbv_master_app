import { BsPersonCheck } from "react-icons/bs";

function BarraDeProgresso({meta}){
    return(
        <div className="mt-5 ">
            <p className="text-white pb-2">{meta}</p>
        <div className="w-full border border-black rounded-full flex overflow-hidden p-1">
            <div className="bg-green-600 w-1/2 rounded-full">

            </div>
            <div className="flex justify-center items-center">
            <p className="text-white">50%</p>
            </div>
        </div>
        </div>
    )
}
export default BarraDeProgresso;