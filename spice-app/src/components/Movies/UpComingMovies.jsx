import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieCategory } from '../../redux/actions'
import { Card, Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const UpComingMovies = () => {


    const dispatch = useDispatch()
    const upComingMovies = useSelector(state => state.movies.movie_category)
    // console.log(upComingMovies[0])

    const loading = useSelector(state => state.movies.loading)

    // useEffect(() => {
    //     dispatch(getMovieCategory())
    // }, [])

    const IMG_URL = 'https://image.tmdb.org/t/p/original'




    return (
        <div className=' text-gray-300 '>
            <h6 className='text-center'>Upcoming Movies</h6>
            <div className=' flex overflow-hidden '>
                <Card className='w-10 h-10 mx-1 mb-2 mt-1   flex flex-wrap scroller  hover:border-purple-800 hover:text-gray-200 border-blue-600 border-b-2 hover:bg-blue-800 rounded-full' >
                    {
                        loading
                            ? (<Spinner animation="border" variant="success" />)
                            : upComingMovies[0]?.data.results.map((movie) =>
                            (
                                <Link to={`/movie/${movie.id}/credits`} className="no-underline">

                                    <div key={movie.id} className='flex justify-center '>

                                        <Card.Img variant="top" className="img-fluid h-5 w-5 " src={IMG_URL + movie.poster_path} />



                                    </div>
                                </Link>)
                            ).reverse()
                    }
                </Card>
            </div>
        </div>
    )
}

export default UpComingMovies
