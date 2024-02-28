import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cadastrar(){

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [usuariosCadastrados, setUsuariosCadastrados] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3400/usuarios')
        .then(response=> response.json())
        .then(data => setUsuariosCadastrados(data))
        .catch(error=> console.log('Error ao carregar usuário:', error))

    }, []);


    const handleSubmit = (e)=>{
        e.preventDefault();
       
    }
    function visualizarLista(){
        console.log(usuariosCadastrados)
    }
    const newUsuario = {
        usuario: usuario,
        password: senha
    };

    fetch('http://localhost:3400/usuarios', {method: 'POST', headers:{'Content-Type':'application/json',}, body: JSON.stringify(newUsuario)})

    .then(response=> response.json())
    .then(data=> {setUsuariosCadastrados([...usuariosCadastrados, data]);
    setUsuario('');
    setSenha('');
    })
    .catch(error=> console.log('Erro ao cadastrar usuário:', error))


    return(
        <div className="bg-blue-600 h-screen pt-10  flex flex-col justify-center items-center">
            <h1 className="text-white font-Roboto text-2xl">Cadastro de Usuários</h1>
            <form className="flex flex-col justify-center items-center gap-2">
                <input className="px-6 py-2 outline-none rounded-lg" type="text" placeholder="Digite o usuário" value={usuario} onChange={(e)=> setUsuario(e.target.value)}/>
                <input className="px-6 py-2 outline-none rounded-lg" type="password" placeholder="Digite s senha" value={senha} onChange={(e)=> setSenha(e.target.value)}/>
                <div className="flex gap-4">
                <button className="bg-white rounded-lg font-Roboto px-4 py-2" type="submit" >Cadastrar</button>
                <Link to='/'>
                <button className="bg-white rounded-lg font-Roboto px-4 py-2" >Voltar</button>
                </Link>
                <button className="bg-white rounded-lg font-Roboto px-4 py-2" onClick={visualizarLista}>Visualizar</button>
                
                </div>
            </form>
            <div className="mt-10 bg-white flex flex-col gap-4 w-1/2 h-60 px-6 py-4 font-Roboto rounded-lg">
                <h1 className="text-2xl">Usuários Cadastrados</h1>
                
               
                {usuariosCadastrados.map((user, index)=>(
                    
                    <div key={index}>
                    <p className="text-left ">Usuário: {user.usuario}</p>
                    <p className="text-left">Senha: {user.password}</p>
                   
                    
                    </div>
                    
                    ))}
                
            </div>

        </div>
    )
}
export default Cadastrar;