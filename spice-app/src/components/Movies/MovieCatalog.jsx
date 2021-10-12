import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieCategory } from '../../redux/actions'

const MovieCatalog = () => {

    const dispatch = useDispatch()

    return (
        <div className='text-gray-200 flex flex-col  border-b border-t border-l border-pink-600'>
            <button onClick={() => dispatch(getMovieCategory('upcoming'))}>Up Coming</button>
            <button onClick={() => dispatch(getMovieCategory('top_rated'))}>Top Rated</button>
            <button onClick={() => dispatch(getMovieCategory('now_playing'))}>Now Playing</button>
            <button onClick={() => dispatch(getMovieCategory('popular'))}>popular</button>

        </div>
    )
}

export default MovieCatalog
