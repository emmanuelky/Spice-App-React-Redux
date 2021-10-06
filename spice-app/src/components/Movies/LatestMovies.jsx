import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieCategory } from '../../redux/actions'
import { Card, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LatestMovies = () => {


    const dispatch = useDispatch()
    const LatestMovies = useSelector(state => state.movies.movie_category)
    // console.log(LatestMovies[0])

    useEffect(() => {
        dispatch(getMovieCategory())
    }, [])

    const IMG_URL = 'https://image.tmdb.org/t/p/original'




    return (
        <div className=' text-gray-300 my-5'>
            <h6 className='text-center'>Latest Movies</h6>
            <div className="flex flex-wrap justify-center" >
                {
                    LatestMovies[3].data.results?.map((movie) =>

                    (
                        <Link to={`/movie/${movie.id}/credits`} className="no-underline">

                            <Card key={movie.id} className='w-10 h-10 mx-2 mt-1 mb-4  hover:border-purple-800 hover:text-gray-200 border-blue-600 border-b-2 hover:bg-blue-800 rounded-full' >
                                <Card.Img variant="top" className="w-20 h-20" src={IMG_URL + movie.poster_path} />
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </Link>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default LatestMovies
