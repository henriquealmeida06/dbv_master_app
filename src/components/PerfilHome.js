
import amigoClasse from './../img/classes/amigo.svg'
import companheiroClasse from './../img/classes/companheiro.svg'
import excursionistaClasse from './../img/classes/excursionista.svg'
import pioneiroClasse from './../img/classes/pioneiro.svg'
import guiaClasse from './../img/classes/guia.svg'
import pesquisadorClasse from './../img/classes/pesquisador.svg'
import liderClasse from './../img/classes/lider.svg'


function PerfilHome({foto, nome, cargo, estrelas}){
    return(
        <div className=' w-px400 lg:w-px420 flex overflow-hidden rounded-tr-md rounded-br-md lg:h-60 h-64 transform transition-transform'>

<div className="flex ">
                <div className="flex rounded-md flex-col h-64 lg:h-60 w-32 items-center p-2 border-2 border-yellow-500 overflow-hidden bg-slate-800">
                <div className=" w-28 overflow-hidden ">
                    <img src={foto}/>
                    
                </div>
                <div className="flex flex-col">
                <div className="bg-blue-900 w-screen">
                    <p className="text-white">{nome}</p>
                </div>
                <div className='flex flex-col pt-1'>
                
                    <p className="text-white  text-base">LÍDER</p>
                </div>
                <p className="text-white  text-base pt-1">
                    {cargo}
                </p>
                
                
                </div>
                <div className="w-28 pt-1">
                    <img src={estrelas}/>
                </div>
                </div>
                
                <div className='flex flex-col text-left w-56 lg:w-80 bg-black bg-opacity-50 text-white p-1 gap-3 text-sm lg:text-base'>
                    
                    <div className='flex flex-col justify-center items-center bg-black bg-opacity-30'>
                    <p>CLUBE</p>
                    <p>Conquistadores da Selva</p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-1  bg-black bg-opacity-30'>
                    <p>CLASSES:</p>
                    <div className='flex gap-1'>
                    <img className='w-5 lg:w-7' src={amigoClasse}/>
                    <img className='w-5 lg:w-7' src={companheiroClasse}/>
                    <img className='w-5 lg:w-7' src={pesquisadorClasse}/>
                    <img className='w-5 lg:w-7' src={pioneiroClasse}/>
                    <img className='w-5 lg:w-7' src={excursionistaClasse}/>
                    <img className='w-5 lg:w-7' src={guiaClasse}/>
                    <img className='w-5 lg:w-7' src={liderClasse}/>
                    </div>
                    </div>
                    <div className='flex flex-col justify-center items-center  bg-black bg-opacity-30'>
                    <p>ESPECIALIDADES:</p>
                    <p>61</p>
                    </div>
                    <div className='flex flex-col justify-center items-center  bg-black bg-opacity-30'>
                        <p>HIERARQUIA:</p>
                        <p>Líder</p>
                    </div>
                    <div className='flex flex-col justify-center items-center  bg-black bg-opacity-30'>
                        <p>RANKING DO CLUBE:</p>
                        <p>3° Lugar</p>
                    </div>
                </div>
                

            </div>
            

           
        </div>
    )
}
export default PerfilHome;