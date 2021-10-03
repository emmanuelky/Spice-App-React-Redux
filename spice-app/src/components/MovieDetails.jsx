
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Button, Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies, getMovieDetails } from '../redux/actions'
// import MovieModal from './MovieModal'
import { Link } from 'react-router-dom'


const MovieDetails = () => {

    const { id } = useParams()
    console.log(id)

    const dispatch = useDispatch()

    const movieDetail = useSelector(state => state.movies.movie_detail)
    console.log(movieDetail)

    const IMG_URL = 'https://image.tmdb.org/t/p/original'

    const movie_URL = 'https://api.themoviedb.org/3/search/movie/'

    const shortTitle = (title) => {
        return title.slice(0)
    }


    useEffect(() => {
        dispatch(getMovieDetails(id))
    }, [])

    return (
        <div className="flex flex-wrap justify-center" >
            {

                (
                    <Card key={movieDetail.id} className='w-40 h-40 mx-4 my-2  hover:border-purple-800 hover:text-gray-200 border-blue-600 border-b-2 hover:bg-blue-800 rounded-full' >
                        <Card.Img variant="top" className="img-fluid" src={IMG_URL + movieDetail.backdrop_path} />
                        <Card.Body>
                            <span className="overflow-ellipsis overflow-hidden" >{movieDetail.title}</span>
                            <Card.Text>

                            </Card.Text>

                        </Card.Body>
                    </Card>




                )

            }
        </div>
    )
}

export default MovieDetails
