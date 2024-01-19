import fotoPerfil from './../img/perfil1.jpeg'
import amigoClasse from './../img/classes/amigo.svg'
import companheiroClasse from './../img/classes/companheiro.svg'
import excursionistaClasse from './../img/classes/excursionista.svg'
import pioneiroClasse from './../img/classes/pioneiro.svg'
import guiaClasse from './../img/classes/guia.svg'
import pesquisadorClasse from './../img/classes/pesquisador.svg'
import liderClasse from './../img/classes/lider.svg'
import estrela35 from './../img/classificacao_estrelas/estrelas35.png'

function Home(){
    return(
        <div className="min-h-screen bg-ceuDia bg-cover bg-no-repeat pt-20 px-10 lg:px-5 pt-40 grid grid-cols-1 lg:grid-cols-2">
            <div className=" bg-black py-5 grid grid-cols-1 rounded-md lg:grid-cols-2 justify-evenly items-center bg-opacity-60 px-2">
                <div className="flex flex-col justify-center items-center gap-3">
                <div className="border-2 border-black w-28 ">
                    <img src={fotoPerfil}/>
                    
                </div>
                <div className="text-white bg-black bg-opacity-50 px-2 py-1 mb-5">
                    <p className="font-Roboto">HENRIQUE ALMEIDA</p>
                    </div>
                </div>
                <div className='text-white text-left flex flex-col gap-5 '>
                    <div className='flex gap-2  bg-black bg-opacity-50 px-2 py-3'>
                    <p>Nome:</p>
                    <p>Marcelo Henrique Silva de Almeida</p>
                    </div>
                    <div className='flex gap-2  bg-black bg-opacity-50 px-2 py-3'>
                    <p>Clube:</p>
                    <p>Conquistadores da Selva</p>
                    </div>
                    <div className='flex gap-2  bg-black bg-opacity-50 px-2 py-3'>
                    <p>Hierarquia:</p>
                    <p>Líder</p>
                    </div>
                    <div className='flex gap-2 items-center  bg-black bg-opacity-50 px-2 py-3'>
                    <p>Classes:</p>
                    <div className='flex gap-1'>
                    <img className='w-7' src={amigoClasse}/>
                    <img className='w-7' src={companheiroClasse}/>
                    <img className='w-7' src={pesquisadorClasse}/>
                    <img className='w-7' src={pioneiroClasse}/>
                    <img className='w-7' src={excursionistaClasse}/>
                    <img className='w-7' src={guiaClasse}/>
                    <div className='flex pl-3'>
                    <img className='w-7' src={liderClasse}/>
                    </div>
                    </div>
                    
                    </div>
                    <div className="flex gap-3 items-center bg-black bg-opacity-50 px-2 py-3">
                        <p>Nivel:</p>
                        <img className="w-40" src={estrela35}/>
                        
                    </div>
                </div>

            </div>
           <div className="border border-red-500">
            <p>sd</p>
           </div>
            </div>
        
    )
}
export default Home;