import Logo from './../img/app/logo_login.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Login(){

    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [logged, setLogged] = useState(false)

    function handleLogin(){
        if (userName === 'admin' && password === '123'){
            setLogged(true)
            alert('Login bem-sucedido!')
            navigate('/home'); 
            
            
        }else{
            alert('Credenciais inválidas. Por favor, tente novamente.')
            setUserName('')
            setPassword('')
        }
    }

   

    
    return(
        <div className="h-screen bg-blue-900 font-Roboto flex flex-col justify-center items-center">
            
            <div className='bg-blue-900 bg-opacity-80 flex flex-col justify-center items-center w-90 p-5 rounded-lg'>
            <div className='flex justify-center items-center gap-2 bg-black bg-opacity-25 py-2 px-8 rounded-full'>
            <img className='w-10' src={Logo}/>
            <div className='flex'>
            <p className='text-4xl text-yellow-500'>DBV</p>
            <p className='text-4xl text-white'>MASTER</p>
            </div>
            </div>
            <form className='flex flex-col pt-6 gap-4'>
                <input className='border outline-none w-80 text-white border-white bg-transparent placeholder:text-white px-3 py-2 rounded-full' type='text' placeholder='Login' value={userName} onChange={(e)=> setUserName(e.target.value)}/>
                <input className='border outline-none text-white border-white bg-transparent placeholder:text-white px-3 py-2 rounded-full' type='password' placeholder='Senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </form>
            <p className='text-sm text-gray-200 pt-3 cursor-pointer'>Esqueceu sua senha?</p>
            <button className='bg-blue-500 px-6 py-2 cursor-pointer hover:bg-blue-300 hover:text-blue-900 hover:font-medium text-white rounded-full mt-3' onClick={handleLogin}>Entrar</button>
            <div className='flex gap-2'>
                <p  className='text-sm text-gray-200 pt-3'>Primeira vez?</p>
                <Link to='/cadastrar'>
                <p  className='text-sm text-white font-Roboto cursor-pointer pt-3 border-b border-white hover:text-gray-400'>Cadastrar</p>
                </Link>
            </div>

            </div>

        </div>
    )
}
export default Login;