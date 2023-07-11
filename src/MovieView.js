import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import { useParams } from 'react-router-dom'

const MovieView = () => {
    const { id } = useParams();
    console.log(id)

    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        console.log('make api req', id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1e9f3cead1d2ad3811ef9c6806e1f2ee&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data);
                setisLoading(false);
            })
    }, [id])

    const renderMovieDetails = () => {
        if (isLoading) {
            return <Hero text="Loading..." />
        }
        if (movieDetails) {
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

           return (
            <>
            <Hero text={movieDetails.original_title}  backdrop={backdropUrl}/>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={posterPath} alt='img of movie' className='img-fluid shadow rounded'/>
                    </div>
                    <div className='col-md-9'>
                        <h2>{movieDetails.original_title}</h2>
                        <p className='lead'>
                            {movieDetails.overview}
                        </p>
                    </div>

                </div>
            </div>
            </>
           ) 

        }
    }


    return renderMovieDetails()
}

export default MovieView
