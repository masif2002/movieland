import { useState, useEffect } from 'react'
import searchIcon from './assets/search.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('superman')

  useEffect(() => {
    fetchMovies(searchTerm)
  }, [])
  
  const fetchMovies = async (movieName) => {
    console.log(movieName)
    const apiUrl = `https://www.omdbapi.com/?apikey=1a652ba6&s=${movieName}`
    
    const response = await fetch(apiUrl)
    const jsonData = await response.json()
    setMovies(jsonData.Search)
  }

  return (
    <div className="mb-[100px]">
      
      <a href="#">
        <div className='flex justify-center mt-10'>
          <h1 className='text-6xl uppercase font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-black'>MovieLand</h1>
        </div>
      </a>

      <div className="flex justify-center mt-10">
    
        <form 
        onSubmit={(e) => {
          e.preventDefault()
          fetchMovies(searchTerm)
        }}
        className='' >

        <div className='border-yellow-600 border-1px border rounded-2xl flex justify-center w-[450px] shadow-md shadow-yellow-600'>
          <input className="px-10 py-5 w-[400px]  bg-transparent focus:outline-none" type="text" placeholder='Enter movie name' name='movieSearch' id='movieSearch' autoComplete='off' 
          onChange={(e) =>  setSearchTerm(e.target.value)}/>
          <button type='submit'>
           <img src={searchIcon} className='text-yellow-500' />
          </button>
        
        </div>
        </form>
    
      </div>
      
      <div className="flex flex-row flex-wrap gap-10 mt-20 mx-10 justify-center">
        {movies ? movies.map((movie, id) => (
          <MovieCard movie={movie} key={id} />
        )) 
        : 
        <h2 className='text-2xl'>No  Movies Found</h2> }
      </div>

    </div>
  )
}
// https://www.omdbapi.com/?apikey=1a652ba6&s=superman
export default App
