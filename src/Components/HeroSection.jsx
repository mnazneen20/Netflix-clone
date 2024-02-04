import React, { useEffect, useState } from 'react'
import { Play, Plus } from '@phosphor-icons/react';

const HeroSection = () => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const url = `${import.meta.env.VITE_BASE_URL}/discover/movie?include_adult=false&include_video=true&page=${Math.ceil(Math.random() * 3)}&sort_by=popularity.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${import.meta.env.VITE_API_KEY}`
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                const movie = data.results[Math.ceil(Math.random() * data.results.length)];
                const posterURL = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                movie.mybackdrop = posterURL;
                setMovie(movie)
                console.log(movie)
            })
            .catch(err => console.error('error:' + err));
    }, [])
    return (
        <div>
            {
                movie &&
                <div className='h-[95vh] w-full relative'>
                    <img src={movie.mybackdrop} alt={`backdrop of movie ${movie.original_title}`} className='object-cover h-full w-full brightness-[60%]' />
                    <div className='absolute bottom-28 text-white ml-20'>
                        <h1 className='font-extrabold text-4xl'>{movie.title}</h1>
                        <p className='max-w-[800px] my-4 line-clamp-3'>{movie.overview}</p>
                        <div className='flex gap-4'>
                            <button className='flex gap-2 rounded bg-white text-black w-32 py-2 items-center justify-center'>
                                <span>
                                    <Play size={24} weight="fill" />
                                </span>
                                Play
                            </button>
                            <button className='flex gap-2 rounded bg-gray-600 w-32 py-2 items-center justify-center'>
                                <span>
                                    <Plus size={26} weight="bold" />
                                </span>
                                My List
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default HeroSection