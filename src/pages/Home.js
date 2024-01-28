import PerfilHome from "../components/PerfilHome";
import estrela7 from './../img/classificacao_estrelas/estrela7.png'
import fotoPerfil from './../img/fotos/henrique.png'
import BarraDeProgresso from "../components/BarraDeProgresso";

function Home(){
    return(
        <div className="min-h-screen bg-blue-900 pt-24 lg:px-5 flex flex-col justify-start items-center   lg:grid grid-cols-2 lg:content-start lg:items-center ">
            <div className="  lg:flex lg:justify-center">
            <PerfilHome foto={fotoPerfil} nome="HENRIQUE" cargo="Secretário" estrelas={estrela7}/>
            </div>
            <div className="  w-screen mt-5 lg:mt-0 px-10 lg:w-auto ">
                <BarraDeProgresso meta="FREQUÊNCIA"/>
                <BarraDeProgresso meta="CUMPRIMENTO DE CLASSES"/>
                <BarraDeProgresso meta="MENSALIDADE"/>
                <BarraDeProgresso meta="UNIFORME"/>
                
                
            </div>
          
            </div>
        
    )
}
export default Home;