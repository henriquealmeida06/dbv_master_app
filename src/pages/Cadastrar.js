
import { Link } from "react-router-dom";

function Cadastrar(){

    

    

    return(
        <div className="bg-blue-900 h-screen pt-10  flex flex-col justify-center items-center">
            <h1 className="text-white font-Roboto text-2xl pb-2">Cadastro de Usuário</h1>
            <form className="flex flex-col justify-center items-center gap-2">
                <input className="px-6 py-2 outline-none rounded-md" type="text" placeholder="Digite o seu usuário" />
                <input className="px-6 py-2 outline-none rounded-md" type="text" placeholder="Confirme seu usuário" />
                <input className="px-6 py-2 outline-none rounded-md" type="password" placeholder="Digite sua senha" />
                <div className="flex flex-col gap-4 w-full pt-5">
                <button className="bg-blue-500 text-white rounded-md font-Roboto w-full px-4 py-2" type="submit" >Cadastrar</button>
                <div className="flex justify-center items-center gap-1 text-white">
                <p>Já tem uma conta?</p>
                <Link to="/">
                <p className="font-medium cursor-pointer">Entre</p>
                </Link>
                </div>
               
                
                </div>
            </form>
                    
            

        </div>
    )
}
export default Cadastrar;