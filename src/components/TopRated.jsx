import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";


function TopRated() {

  const [topMovies, setTopMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);


  // const [selectedGenre, setSelectedGenre] = useState('');




// https://api.themoviedb.org/3/discover/movie?api_key=90b72689843a2459509ce06ccfa1b5dc&page=1&year=2005
// https://api.themoviedb.org/3/movie/top_rated?api_key=90b72689843a2459509ce06ccfa1b5dc&page=${page}&year=${selectedYear}&genre=${selectedGenre}

  const { page } = useParams();

  useEffect(() =>{
    const getMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_APP_MOVIE_API_KEY}&page=${page}`)
      const data = await response.json()
      console.log(data);
      setTotalPages(data.total_pages);
      const results = data.results
      console.log(data);

      setTopMovies(results)
    }
    getMovies()

  },[page])


  return (
    <>    
        
    <div className="flex flex-wrap items-center justify-center gap-14 p-6 m-5">
    
      {topMovies?.length > 0 ? (
        topMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
          <Card key={movie.id} movie={movie} />
          </Link>
        ))
      ) : (
        <h2 className="text-sm font-normal px -6">No topMovies found....</h2>
      )}
      

    </div>
    <div className="flex items-center justify-center gap-14 p-6 m-5 ">
        {parseInt(page) > 1 && (
          <Link className="px-5 py-2 bg-black text-white rounded-md" to={`/toprated/${parseInt(page) - 1}`}>Previous Page</Link>
        )}

        {parseInt(page) < totalPages && (
          <Link className="px-5 py-2 bg-black text-white rounded-md" to={`/toprated/${parseInt(page) + 1}`}>Next Page</Link>
        )}
      </div>
    
    </>
  )
}

export default TopRated