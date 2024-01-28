import Logo from './../img/app/logo_login.png'

function Login(){
    return(
        <div className="h-screen bg-blue-900 font-Roboto flex flex-col justify-center items-center">
            
            <div className='bg-blue-900 bg-opacity-80 flex flex-col justify-center items-center w-90 p-5 rounded-lg'>
            <div className='flex justify-center items-center gap-2 bg-black bg-opacity-25 py-2 px-16 rounded-full'>
            <img className='w-10' src={Logo}/>
            <div className='flex'>
            <p className='text-4xl text-yellow-500'>DBV</p>
            <p className='text-4xl text-white'>MASTER</p>
            </div>
            </div>
            <form className='flex flex-col pt-6 gap-4'>
                <input className='border outline-none w-96 text-white border-white bg-transparent placeholder:text-white px-3 py-2 rounded-full' type='text' placeholder='Login'/>
                <input className='border outline-none text-white border-white bg-transparent placeholder:text-white px-3 py-2 rounded-full' type='password' placeholder='Senha'/>
            </form>
            <p className='text-sm text-gray-200 pt-3 cursor-pointer'>Esqueceu sua senha?</p>
            <button className='bg-blue-500 px-6 py-2 cursor-pointer text-white rounded-full mt-3'>Entrar</button>
            <div className='flex gap-2'>
                <p  className='text-sm text-gray-200 pt-3'>Primeira vez?</p>
                <p  className='text-sm text-white font-Roboto cursor-pointer pt-3 border-b border-white'>Cadastrar</p>
            </div>

            </div>

        </div>
    )
}
export default Login;