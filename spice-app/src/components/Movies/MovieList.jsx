import React, { useEffect, useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies, } from '../../redux/actions'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'



const MovieList = () => {


    const dispatch = useDispatch()
    const allMovies = useSelector(state => state.movies.all_movies)
    console.log(allMovies)




    useEffect(() => {
        dispatch(fetchMovies())
    }, [])





    const IMG_URL = 'https://image.tmdb.org/t/p/original'

    const movie_URL = 'https://api.themoviedb.org/3/search/movie/'

    const shortTitle = (title) => {

        let newTitle = title.split(" ", 2)
        return newTitle[0] + ' ' + newTitle[1]
    }



    return (
        <>
            <div className="flex flex-wrap justify-center pb-5" >
                {
                    allMovies?.map((movie) =>
                    (
                        <Link to={`/movie/${movie.id}/credits`} className="no-underline">
                            <Card key={movie.id} className='w-40 h-40 mx-4 my-5  hover:border-purple-800 hover:text-gray-200 border-blue-600 border-b-2 hover:bg-blue-800 rounded-full' >
                                <Card.Img variant="top" className="img-fluid" src={IMG_URL + movie.poster_path} />
                                <Card.Body>
                                    {/* <Card.Text className='text-center'>
                                        {shortTitle(movie.title)}
                                    </Card.Text> */}

                                </Card.Body>
                            </Card>
                        </Link>
                    )
                    )
                }
            </div>






        </>
    )
}

export default MovieList
