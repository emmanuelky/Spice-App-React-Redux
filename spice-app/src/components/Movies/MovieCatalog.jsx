import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieCategory } from '../../redux/actions'

const MovieCatalog = () => {

    const dispatch = useDispatch()

    return (
        <div className='text-gray-200 flex flex-col  border-b border-t border-l  border-indigo-600'>
            <div className='flex mx-auto'><h3 className='my-6 text-center underline text-indigo-700'>Movie </h3><h3 className='my-6 text-center text-gray-200'>Catalog</h3></div>
            <button className='my-4 bg-gradient-to-t from-pink-800 via-indigo-800 to-purple-800 mx-5 rounded-full p-1 hover:bg-pink-900' onClick={() => dispatch(getMovieCategory('upcoming'))}>Up Coming</button>
            <button className='my-4 bg-gradient-to-t from-pink-800 via-indigo-800 to-purple-800 mx-5 rounded-full p-1 hover:bg-pink-900 ' onClick={() => dispatch(getMovieCategory('top_rated'))}>Top Rated</button>
            <button className='my-4 bg-gradient-to-t from-pink-800 via-indigo-800 to-purple-800 mx-5 rounded-full p-1 hover:bg-pink-900' onClick={() => dispatch(getMovieCategory('now_playing'))}>Now Playing</button>
            <button className='my-4 bg-gradient-to-t from-pink-800 via-indigo-800 to-purple-800 mx-5 rounded-full p-1 hover:bg-pink-900' onClick={() => dispatch(getMovieCategory('popular'))}>Popular</button>

        </div>
    )
}

export default MovieCatalog
