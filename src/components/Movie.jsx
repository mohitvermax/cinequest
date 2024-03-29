import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Movie() {
  const [movie,setMovie] = useState({})

  const { id } = useParams();
  console.log(id);

  useEffect(() =>{
    const getMovieDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_APP_MOVIE_API_KEY}`)
      const data = await response.json()
      console.log(data);
      setMovie(data)
    }
  getMovieDetails()

  },[id])
  
    const bgimgurl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    
  return (
        <div className='w-full min-h-[90vh]' style={{ backgroundImage: `url(${bgimgurl})`, backgroundPosition:"center", backgroundSize:"cover"}}>
        <div className='w-full min-h-[90vh]' style={{backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
            <div className='movie-container w-full h-1/2 p-6  flex items-center gap-6 '>
              <img className="w-96 object-cover rounded-md" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />


              <div className="details flex flex-col gap-4 text-white" >
                  <h1 className="font-bold text-6xl ">{movie.title}</h1>
                  {movie.tagline ? <h3 className="italic text-lg">"{movie.tagline}"</h3> : <></>}
            
                  <p className="text-lg opacity-60 ">{movie.overview}</p>
                  <p className="text-sm">Status : {movie.status}</p>
                  <p className="text-sm">Released on : {movie.release_date}</p>
                  <p className="text-sm ">Avg. rating : {movie.vote_average}</p>
                  {movie.adult ? <p className="text-sm">18+</p>: <></>}
                  
        </div>
        </div>
        </div>


</div>
  )
}
