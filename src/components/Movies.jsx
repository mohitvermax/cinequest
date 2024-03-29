import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";


function Movies() {

  const [topMovies, setTopMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedYear, setSelectedYear] = useState('');
  const [region, setRegion] = useState('');

  const [selectedGenre, setSelectedGenre] = useState('');






  const { page } = useParams();

  useEffect(() =>{
    const getMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_APP_MOVIE_API_KEY}&page=${page}&with_genres=${selectedGenre}&region=${region}&year=${selectedYear}`)
      const data = await response.json()
      console.log(data);
      setTotalPages(data.total_pages);
      const results = data.results
console.log(data);

      setTopMovies(results)
    }
    getMovies()

  },[page,selectedYear ,selectedGenre, region])




  return (
    <>    
    <div className="filter-options flex items-center justify-center gap-14 p-6 m-5">
    
        <label>Genre:
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="">All Genres</option>
            <option value="28">Action</option>
            <option value="35">Comedy</option>
            <option value="12">Adventure</option>
            <option value="18">Drama</option>
            <option value="36">History</option>
            <option value="10749">Romance</option>
            <option value="878">Sci fi</option>



     
          </select>
        </label>

        <label>Release Year:
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            <option value="">All Years</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </label>
        <label>Region : 
          <select value={region} onChange={(e) => setRegion(e.target.value)}>
            
            <option value="us">USA</option>
            <option value="in">India</option>



          </select>
        </label>
        
        
      </div>
    <div className="flex flex-wrap items-center justify-center gap-14 p-6 m-5">
    
      {topMovies?.length > 0 ? (
        topMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
          <Card key={movie.id} movie={movie} />
          </Link>
        ))
      ) : (
        <h2 className="text-sm font-normal px -6">No movie found....</h2>
      )}
      
    </div>
    <div className="flex items-center justify-center gap-14 p-6 m-5 ">
        {parseInt(page) > 1 && (
          <Link className="px-5 py-2 bg-black text-white rounded-md" to={`/movies/${parseInt(page) - 1}`}>Previous Page</Link>
        )}

        {parseInt(page) < totalPages && (
          <Link className="px-5 py-2 bg-black text-white rounded-md" to={`/movies/${parseInt(page) + 1}`}>Next Page</Link>
        )}
      </div>
    
    </>
  )
}

export default Movies