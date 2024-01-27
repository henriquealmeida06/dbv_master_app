import { BsPersonCheck } from "react-icons/bs";

function BarraDeProgresso({meta}){
    return(
        <div className="mt-5 ">
            <p className="text-white text-sm text-left pb-2">{meta}</p>
        <div className="w-full bg-black bg-opacity-70 rounded-full flex overflow-hidden p-1">
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