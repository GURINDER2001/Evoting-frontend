import React from 'react'

const Login = () => {
    return (
        <div className='flex h-screen'>
            <div className="flex-auto px-24 w-8/12  bg-sky-50">

                <h1 class="text-2xl font-bold py-4 text-dark-blue">
                    Voting
                </h1>
                
                <img src="/login.png" className='w-8/12 mt-36 mx-auto' alt="" />
            </div>
            <div className="flex-auto w-4/12 text-center">
                <div className="flex items-center justify-center min-h-screen w-full">
                    <div className="text-center">

                        <h1 class="text-3xl font-bold text-dark-blue">
                            SIGN IN
                        </h1>
                        <div>
                        <input type="text" className='px-4 py-2 placeholder-slate-300 text-slate-600 bg-white  border-2  mt-20  outline-none focus:outline-none focus:ring  rounded w-80' placeholder='Username' />
                    
                        <input type="password" className='px-4 block py-2 placeholder-slate-300 text-slate-600 bg-white  border-2 mt-5 outline-none focus:outline-none focus:ring  rounded w-80' placeholder='password' />

                        </div>
                        <button className='bg-dark-blue py-2 px-24 rounded text-white font-medium mt-12 ' >SIGN IN</button>
                        <div className='font-bold text-slate-400 mt-4'>New User ? <span className='text-dark-blue'>Register</span></div>
   
          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login