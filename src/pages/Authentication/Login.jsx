import React from 'react'
import Logo from '../../assets/Logo/black_.png'
import { FaGoogle } from 'react-icons/fa'
function Login() {
  return (
    <div className='h-screen p-2 mx-auto bg-white md:p-10 lg:p-5'>
        <div className="mx-auto bg-gray-100/30 border px-4 shadow-lg w-[22rem] md:w-[24rem] min-h-[33rem] rounded-md">
            <img src={Logo} alt="" className='flex justify-center mx-auto size-36 mt-[-2rem]'/>
            <p className="text-md font-normal text-center text-gray-400 mt-[-2.4rem]">Please fill in the form below</p>
            <div className="flex justify-center mt-4">
                <form className="login" action="" method="POST">
                    <label for="username" className='font-sans font-semibold text-gray-600 text-md'>Username</label>
                    <input type="text" name="username" id="username" placeholder='Enter your username' className="w-full py-2 pl-2 mt-2 mb-2 text-gray-600 border rounded-md" />
                    <label for="email" className='font-sans font-semibold text-gray-600 text-md'>Email</label>
                    <input type="text" name="email" id="email" placeholder='Enter your email' className="w-full py-2 pl-2 mt-2 text-gray-600 border rounded-md" />
                    <p className="pt-3 text-sm font-normal text-gray-600">Don't have an account ?  <span className='text-blue-400 '>Signup</span> </p>
                    <button type="submit" className="w-full py-2 mt-5 text-white bg-green-500 rounded-md hover:bg-green-400">Submit</button>
                </form>
            </div>
            <div className="mt-3 mb-2 text-center text-gray-600">Or</div>
            <button type="button" className="flex items-center justify-center w-full gap-5 py-3 font-medium text-gray-500 rounded-md shadow-md cursor-pointer hover:bg-gray-100/50">
                <FaGoogle size={20} />
                Continue with Google
            </button>
            <p className="pt-3 text-sm font-normal text-center text-gray-400">
                By clicking on submit you agree to our <span className="text-blue-400">terms</span> and <span className="text-blue-400">privacy</span> policies
            </p>
        </div>
    </div>
  )
}

export default Login