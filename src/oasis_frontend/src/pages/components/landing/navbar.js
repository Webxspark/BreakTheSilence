import React from 'react';
import logo from '../../../assets/Logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className='flex my-6 items-center mx-5 justify-between'>
                <div className='flex gap-10'>
                    <Link to="/"><img className='w-40 h-auto lg:w-48 lg:h-auto lg:mt-1' src={logo} /></Link>
                </div>
                <div className='flex lg:mr-7 gap-3 lg:gap-6 items-center'>
                    <Link to="/auth"><div className='text-sm font-bold'>Login</div></Link>
                    <Link to="/auth"><button className='bg-[#0f1629] text-sm text-white font-bold px-2 py-1 lg:px-3 lg:py-2 rounded-lg'>Sign up</button></Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar;