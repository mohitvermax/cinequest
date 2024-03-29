const Card = ({movie}) => {
  return (
    <div>
        <div className='w-48 text-white rounded-md bg-slate-700 h-80'>
        <div className='w-full h-2/3 overflow-hidden bg-black'>
        <img className="w-full h-full" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className='movie flex flex-col justify-center p-2'>
        <h1 className=" text-lg">{movie.title}</h1>
        <p className="text-sm opacity-50">{movie.vote_average}</p>
        
    </div>  
    </div>
    </div>
  )
}

export default Card


// bg dark nav light
// nav fixed top
// nav bg blur
// hover green semibold
// min ht set of each page
// max width of each page
// inc font (set on 100%)
// search center align inc size
// home page bg img gradiet half screen
// form alignment
