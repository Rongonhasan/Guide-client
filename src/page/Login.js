import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contex/AuthContex';
import useTitle from '../hook/useTitle';





const Login = () => {
    const { login, providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handlelogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        login(email, password)
            .then(result => {
                toast.success('Successfully Login')
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast.success('Login Successfully')
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    useTitle("Login")
    return (
        <div className="">
            <Toaster/>
            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center ">
                
                <div className="flex justify-center self-center  z-10 ">
                    <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                            <p className="text-gray-500">Please sign in to your account.</p>
                        </div>
                        <form onSubmit={handlelogin} className="space-y-5 ">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                <input required name="email" className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email" placeholder="mail@gmail.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                    Password
                                </label>
                                <input required name="password" className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" placeholder="Enter your password" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="/" className="text-green-400 hover:text-green-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="w-full my-5 flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold   shadow-lg cursor-pointer transition ease-in duration-500">
                                    Sign in
                                </button>
                                <button onClick={handleGoogleLogin} type="submit" className="w-full flex justify-center bg-red-400  hover:bg-red-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer gap-2  transition ease-in duration-500">
                                    Google 
                                </button>
                            </div>
                            <div>
                                <p>If you haven't  accout please ?<Link to='/register'>Sign UP</Link></p>
                            </div>
                        </form>
                        <div className="pt-5 text-center text-gray-400 text-xs">
                            <span>
                                Copyright © 2021-2022
                                <a href="/" rel="" target="'" title="Food Village" className="text-green hover:text-green-500 ">..</a></span>
                        </div>
                        <Toaster />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;