import {  useState } from "react"
import Card from "./Card"
import { Link } from "react-router-dom"

const Search = () => {

    const API_URL = "https://api.themoviedb.org/3/search/movie?api_key=90b72689843a2459509ce06ccfa1b5dc"

const [searchQuery, setSearchQuery] = useState('')
const [movies,setMovies] = useState([])
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&query=${title}`)
    const data = await response.json()
    const results = data.results
    setMovies(results)
  }



  return (
    <div>
        <div className="search-container mt-12 p-6 ">
          <input
          className='border bg-transparent px-6 py-5 rounded-md h-5 w-72 text-sm font-normal outline-none'
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className='bg-[#00c40a] px-6 py-1 mx-3 rounded-md text-lg font-normal text-white' onClick={() => searchMovies(searchQuery)}>Search</button>
        </div>


        
        <div className="flex flex-wrap items-center justify-center gap-14 p-6 m-5">
      {movies?.length > 0 ? (
        movies.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
          <Card key={movie.id} movie={movie} />
          </Link>
        ))
      ) : (
        <h2 className="text-sm font-normal px -6">No movies found....</h2>
      )}
    </div>
        

        

</div>
  )
}

export default Search