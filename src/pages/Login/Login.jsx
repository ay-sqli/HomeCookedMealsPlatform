import './Login.css'
import { useState } from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineLock} from "react-icons/ai"
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Visible, setVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setVisible(!Visible);
      };

    return(
        <div className='login-container '>

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

        <a href="#"><h1 className="Logo text-center">Home Chef</h1></a>

          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2 flex items-center"> 
                <AiOutlineMail className="absolute text-gray-400 ml-3" size={20} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full p-3 px-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href=".forget-password" className="font-semibold text-red-400 hover:text-red-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative  flex items-center">
              <AiOutlineLock className="absolute text-gray-400 ml-3" size={20} />
                    <input
                        id="password"
                        name="password"
                        type={Visible ? 'text' : 'password'}
                        value={Password}
                        autoComplete="current-password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="block px-10 p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-md sm:leading-6"
                    />
                    <div
                        className="absolute inset-y-0 right-2 flex items-center"
                        onClick={togglePasswordVisibility}
                    >
                  {Visible ? (
                                <AiOutlineEyeInvisible
                                className="absolute right-2 cursor-pointer hover:text-red-400"
                                size={25}
                                onClick={() => togglePasswordVisibility()}
                                />
                            ) 
                           : (
                                <AiOutlineEye
                                className="absolute right-2 cursor-pointer hover:text-red-400"
                                size={25}
                                onClick={() => togglePasswordVisibility()}
                                />
                            )}
                    </div>
                </div>
                <div className="flex items-center mt-6">
                <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="h-4 w-4 text-red-500 focus:ring-red-400 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">
                    Remember me
                </label>
                </div>

            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{' '}
            <Link to="/sign-up" className="font-semibold leading-6 text-red-400 hover:text-red-300">
              Create an account
            </Link>
          </p>
        </div>
    </div>

    <div className="login-image">

    </div>
     
    </div>
    );
};
