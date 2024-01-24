import PerfilHome from "../components/PerfilHome";
import estrela7 from './../img/classificacao_estrelas/estrela7.png'
import fotoPerfil from './../img/fotos/henrique.png'

function Home(){
    return(
        <div className="min-h-screen bg-ceuDia bg-cover bg-no-repeat pt-24 px-20 lg:px-5 grid grid-cols-1 lg: grid-cols-2 content-start border border-red-400">
            <PerfilHome foto={fotoPerfil} nome="HENRIQUE" cargo="Secretário" estrelas={estrela7}/>
            <div className="p-1"></div>
          
            </div>
        
    )
}
export default Home;