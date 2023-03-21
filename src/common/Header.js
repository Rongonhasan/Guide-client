import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { AuthContext } from '../contex/AuthContex';
import {FaUser} from 'react-icons/fa';

const Header = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
        .then(result => { })
        .catch(error => console.log(error))
}

const menuItems = <>
<li className='font-semibold'><Link to='/'>Home</Link></li>
<li className='font-semibold'><Link to='/blogs'>Blog</Link></li>

{
    user?.email ?
        <>
            <li className='font-semibold'><Link to='/myreview'>My Review</Link></li>
            <li className='font-semibold'><Link to='/addservices'>Add Service</Link></li>
            <li className='font-semibold'>
                <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
            </li>

        </>
        :
        <>
            <li className='font-semibold'><Link to='/login'>Login</Link></li>
        </>
}




</>
    
    
   



    return (
        <div className="navbar h-12 mb-4 pt-8 bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {menuItems}
            </ul>
          </div>
                 {/* <p className='text-xl font-black'>Guide</p> */}
                 <img src={logo} className='w-16 md:w-24' alt="" />

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
        {
                    user?.uid ?
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt='' src={user?.photoURL}  title={user.displayName}/>
                            </div>
                        </label> : <FaUser/>
                }
        </div>
      </div>
  
    );
};

export default Header;