import React, { useState } from 'react'
import {FaHeart, FaRegHeart } from 'react-icons/fa'

const Movie = ({item}) => {

    const [like, setLike] =  useState(false)
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 relative hover:scale-110'>
    <img className ="w-full h-auto " src ={`http://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}></img>
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white p-2'>
    <p className='text-white text-xs md:text-sm font-bold flex justify-center items-center h-full'>{item?.title}</p>
    <p onClick={()=> {setLike(!like)}}>{like ? <FaHeart className='absolute top-4 right-4 text-gray-300'></FaHeart> : <FaRegHeart className='absolute top-4 right-4 text-gray-300'></FaRegHeart>}</p>
    </div>
    
    
   </div>
  )
}

export default Movie