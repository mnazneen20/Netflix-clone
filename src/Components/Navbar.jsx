import React, { useEffect, useState } from 'react'
import logo from '../assets/Logonetflix.png'
import user from '../assets/user.png'

const Navbar = () => {
    const [istop, setIstop] = useState(true);
    useEffect(() => {
        const addbg = () => {
            if (window.scrollY < 100) {
                setIstop(true);
            } else {
                setIstop(false);
            }
        }
        window.addEventListener('scroll', addbg);
        return () => window.removeEventListener('scroll', addbg);
    }, []);

    return (
        <div className={`flex justify-between items-center px-14 py-6 sticky top-0 ${istop && 'bg-black'} transition-all ease-in-out duration-500`}>
            <img src={logo} alt='netflix logo' className='w-40' />
            <img src={user} alt='user pic' className='w-10' />
        </div>
    )
}

export default Navbar