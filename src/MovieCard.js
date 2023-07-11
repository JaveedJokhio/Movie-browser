import React from 'react'
import { Link } from 'react-router-dom'



const MovieCard = ({ movie }) => {

    const poster_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl= `/movie/${movie.id}`
    return (
        <>
            <div className='col-lg-3 col-md-3 col-2 my4'>
                <div className="card " >
                    <img src={poster_url} className="card-img-top" alt={movie.original_title} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.original_title}</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
                    </div>
                </div>
            </div>
            
              
                            
            
        </>
    )
    }

export default MovieCard
