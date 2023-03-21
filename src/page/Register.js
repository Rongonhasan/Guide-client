import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../contex/AuthContex';



const Register = () => {
   
    const {createUser,updateUserProfile}=useContext(AuthContext)
    const handleSignUP=e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        createUser(email, password)
        .then(result =>
            {
            toast.success('Sign Up successfully')
            console.log(result);
             form.reset();
             handleUpdateUser(name)
        })
        .catch(error =>  console.error(error));


        const handleUpdateUser = (name) => {
            const profile = {
                displayName: name
            }
    
            updateUserProfile(profile)
                .then(() => {})
                .catch(error => console.error(error));
        }
    
    }
    return (
        <div className="">
            <Toaster/>
            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    
                </div>
                <div className="flex justify-center self-center  z-10">
                    <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
                            <p className="text-gray-500">Please sign Up to Login account.</p>
                        </div>
                        <form onSubmit={handleSignUP} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">Your Name</label>
                                <input required name="text" className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" placeholder="Your Name" />
                            </div>
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
                           
                            <div>
                                <button type="submit" className="w-full my-5 flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                    Sign Up
                                </button>
                              
                            </div>
                            <div>
                                <p> Have an Already account please?<Link to='/login'>login</Link></p>
                            </div>
                        </form>
                        <div className="pt-5 text-center text-gray-400 text-xs">
                            <span>
                                Copyright © 2021-2022
                                <a href="/" rel="" target="'" title="Food Village" className="text-green hover:text-green-500 ">..</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;