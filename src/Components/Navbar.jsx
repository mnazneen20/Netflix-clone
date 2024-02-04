import React, { useEffect, useState } from 'react'
import logo from '../assets/Logonetflix.png'
import user from '../assets/user.png'

const Navbar = () => {
    const [istop, setIstop] = useState(false);
    useEffect(() => {
        const addbg = () => {
            if (window.scrollY === 0) {
                setIstop(false);
            } else {
                setIstop(true);
            }
        }
        window.addEventListener('scroll', addbg);
        return () => window.removeEventListener('scroll', addbg);
    }, []);

    return (
        <div className={`flex justify-between items-center px-14 py-4 w-full fixed top-0 z-10 ${istop && 'bg-black/90'} transition-all ease-in-out duration-500`}>
            <img src={logo} alt='netflix logo' className='w-32' />
            <img src={user} alt='user pic' className='w-7' />
        </div>
    )
}

export default Navbar