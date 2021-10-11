import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { Badge } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

const FavoriteSong = () => {

    const favoriteSongs = useSelector(state => state.music.favorite_songs)
    console.log(favoriteSongs)

    return (
        <div className='mx-auto border-b border-t border-l border-pink-600'>
            <div className="flex text-gray-200 align-items-baseline px-3 mt-5 mb-5 mx-auto">

                <div> <h6>My Favorite Songs</h6></div>

            </div>
            <div className="flex justify-center mb-5">

                <h5><Badge className=" bg-pink-600"><AiOutlineHeart />{favoriteSongs?.length}</Badge></h5>
                <div className='text-pink-700'>  </div>
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
