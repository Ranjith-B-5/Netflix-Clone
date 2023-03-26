import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = (props) => {
    const [movies, setMovies] = useState([])
    

    useEffect(() => {
      axios.get(props.fetchURL).then(
        (res) =>
        {
            setMovies(res.data.results)
        }
      )
    }, [props.fetchURL])
    
    const slideLeft = () =>
    {
        var slider = document.getElementById('slider'+props.RowId);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight= () =>
    {
        var slider = document.getElementById('slider'+props.RowId);
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    
  return (
    <div>
        <h2 className='text-white font-bold text-xl p-4'>{props.title}</h2>
        <div className='flex items-center relative group'>
        <MdChevronLeft onClick={slideLeft} size={40} className="bg-white  top-0 opacity-30 absolute z-10 mt-10 hover:opacity-100 cursor-pointer hidden group-hover:block"></MdChevronLeft>
        <div id={'slider'+ props.RowId} className ="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative ml-4 ">
            {
             movies.map((item, id) => {
                return(
                    <Movie key={id} item = {item}></Movie>
                )
             })
            }
        </div>
        <MdChevronRight onClick={slideLeft} size={40} className="bg-white  top-0 opacity-30 absolute z-10 mt-10 right-0 hover:opacity-100 cursor-pointer hidden group-hover:block"></MdChevronRight>
        </div>
    </div>
  )
}

export default Row