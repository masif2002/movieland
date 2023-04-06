import { motion } from 'framer-motion';
import React from 'react'
import notFound from '../assets/404.png'


const MovieCard = ({ movie }) => {
  console.log(movie)
    const container = {
        hidden: { opacity: 1, y: 100},
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1,
            duration: 0.8
          }
        }
      };
      
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    variants={container}
    viewport={{ once:true }}
    
    >
    <div className='flex flex-col overflow-none border border 1-px border-[#FFFFFF] w-[300px] h-[550px] overflow-hidden rounded-xl hover:cursor-pointer hover:scale-110 duration-200'>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : notFound} alt={movie.Type} width='400px' className='rounded-xl'/>
        <div className='flex justify-between items-center p-5'>
            <h3 className='text-lg font-bold'>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    </div>
    </motion.div>
  )
}

export default MovieCard