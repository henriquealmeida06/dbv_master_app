
import amigoClasse from './../img/classes/amigo.svg'
import companheiroClasse from './../img/classes/companheiro.svg'
import excursionistaClasse from './../img/classes/excursionista.svg'
import pioneiroClasse from './../img/classes/pioneiro.svg'
import guiaClasse from './../img/classes/guia.svg'
import pesquisadorClasse from './../img/classes/pesquisador.svg'
import liderClasse from './../img/classes/lider.svg'


function PerfilHome({foto, nome, cargo, estrelas}){
    return(
        <div className=' w-px420 flex overflow-hidden rounded-tr-md rounded-br-md h-52'>

<div className="flex ">
                <div className="flex rounded-md flex-col h-52 w-32 items-center p-2 border-2 border-yellow-500 overflow-hidden bg-slate-800">
                <div className=" w-28 overflow-hidden ">
                    <img src={foto}/>
                    
                </div>
                <div className="flex flex-col">
                <div className="bg-blue-900 w-screen">
                    <p className="text-white">{nome}</p>
                </div>
                <p className="text-white  text-base pt-1">
                    {cargo}
                </p>
                
                
                </div>
                <div className="w-28 pt-1">
                    <img src={estrelas}/>
                </div>
                </div>
                
                <div className='flex w-96 bg-black bg-opacity-50 text-white p-1 gap-1  text-base'>
                    
                    <p>Marcelo Henrique Silva de Almeida</p>
                </div>
                

            </div>
            

           
        </div>
    )
}
export default PerfilHome;