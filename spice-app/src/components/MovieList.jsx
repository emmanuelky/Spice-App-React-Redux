import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from '../redux/actions'


const MovieList = () => {


    const dispatch = useDispatch()
    const allMovies = useSelector(state => state.movies.movies)
    console.log(allMovies.data)
    const IMG_URL = 'https://image.tmdb.org/t/p/original'



    const shortTitle = (title) => {
        return title.slice(0, 20)
    }


    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    return (
        <>
            <div className="flex flex-wrap justify-center" >
                {
                    allMovies.data.results?.map((movie) =>
                    (<Card key={movie.id} className='w-40 h-40 mx-4 my-2  hover:border-purple-800 hover:text-gray-200 border-blue-600 border-b-2 hover:bg-blue-800 rounded-full' >
                        <Card.Img variant="top" className="img-fluid" src={IMG_URL + movie.backdrop_path} />
                        <Card.Body>
                            <span>{shortTitle(movie.title)}</span>
                            <Card.Text>

                            </Card.Text>

                        </Card.Body>
                    </Card>)
                    )
                }
            </div>

        </>
    )
}

export default MovieList
