import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieCategory } from '../../redux/actions'
import { Card, Button, Modal } from 'react-bootstrap'


const NowPlayingMovie = () => {


    const dispatch = useDispatch()
    const NowPlayingMovie = useSelector(state => state.movies.movie_category)
    console.log(NowPlayingMovie)

    useEffect(() => {
        dispatch(getMovieCategory())
    }, [])

    const IMG_URL = 'https://image.tmdb.org/t/p/original'




    return (
        <div className=' text-gray-300 '>
            <h6 className='text-center'>Now Playing...</h6>
            <div className=' flex overflow-hidden '>
                <Card className='w-10 h-10 mx-1 mb-2 mt-1   flex flex-wrap scroller  hover:border-purple-800 hover:text-gray-200 border-blue-600 border-b-2 hover:bg-blue-800 rounded-full' >
                    {
                        NowPlayingMovie[2].data.results?.map((movie) =>
                        (<div key={movie.id} className='flex justify-center '>

                            <Card.Img variant="top" className="img-fluid h-5 w-5 " src={IMG_URL + movie.poster_path} />



                        </div>)
                        ).reverse()
                    }
                </Card>
            </div>
        </div>
    )
}

export default NowPlayingMovie
