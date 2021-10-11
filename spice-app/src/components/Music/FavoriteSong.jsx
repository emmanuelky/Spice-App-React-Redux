import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { Badge } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

const FavoriteSong = () => {

    const favoriteSongs = useSelector(state => state.music.favorite_songs)
    console.log(favoriteSongs)

    return (
        <div className='mx-auto'>
            <div className="flex text-gray-200 align-items-baseline mx-auto">

                <div> <h4>Favorite</h4></div>
                <div className='text-pink-700'>  <AiOutlineHeart /></div>

            </div>
            <div className="flex justify-center">
                <h5><Badge className=" bg-pink-600">{favoriteSongs?.length}</Badge></h5>
            </div>

            <div>
                {
                    // favoriteSongs.map((favoriteSong)=>(
                    //     <>
                    //     <div>
                    //         <img src={""} alt="" />
                    //     </div>
                    //     </>
                    // ))
                }
            </div>
        </div>
    )
}

export default FavoriteSong
