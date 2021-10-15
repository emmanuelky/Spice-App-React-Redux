import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cardImages from '../Games/MemoryGameImages/imagedata.json'


const MemoryGame = () => {

    const [allImages, setAllImages] = useState(null)

    useEffect(() => {
        setAllImages(cardImages)

    }, [])

    console.log(allImages)

    return (
        <div className="flex flex-wrap">
            {
                allImages?.images?.sort((a, b) => 0.5 - Math.random()).map((image) => (
                    <>
                        <div className='flex border rounded-lg'>

                            <img className='w-20 h-20' src={image.image} alt="" />


                        </div>
                    </>))
            }
        </div>


    )
}

export default MemoryGame
