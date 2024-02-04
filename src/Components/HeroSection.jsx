import React, { useEffect, useState } from 'react'

const HeroSection = () => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}`)
    }, [])
    return (
        <div className='h-[90vh] w-full'>HeroSection</div>
    )
}

export default HeroSection