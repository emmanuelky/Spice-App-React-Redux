import React, { useState, useEffect } from 'react'
import allCardImages from '../Games/MemoryGameImages/imagedata.json'
import { selectedCardImage, imageVisibility, memoryGameTotalScore } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { shuffle } from 'lodash'
import './MemoryGame.css'
import { Alert } from 'react-bootstrap'


const MemoryGame = () => {
    const [cardImages, setCardImages] = useState([])
    const [openedCard, setOpenedCard] = useState([]);
    const [matched, setMatched] = useState([]);


    const dispatch = useDispatch()

    useEffect(() => {
        shuffle(cardImages)
    }, [cardImages.length])

    function flipCard(index) {
        setOpenedCard((opened) => [...opened, index]);
    }

    const handLoadImage = () => {
        setCardImages([...allCardImages?.images, ...allCardImages?.images])
        dispatch(memoryGameTotalScore([]))



    }

    const handleGameReset = () => {
        setCardImages([])
        setOpenedCard([])
        setMatched([])
        dispatch(memoryGameTotalScore([]))


    }

    let counter = 0

    // const checkDuplicates = [...new Set(matched)]

    const gameScore = matched?.map((matched, index) => index + 1 ? counter + 5 : counter)


    console.log(matched)


    // console.log(gameScore)

    useEffect(() => {


        openedCard.filter((item, index) => openedCard.indexOf(item) === index)
        if (openedCard < 2) return;

        const firstMatched = cardImages[openedCard[0]];
        const secondMatched = cardImages[openedCard[1]];

        if (secondMatched && firstMatched.id === secondMatched.id) {
            setMatched([...matched.filter((item, index) => matched.indexOf(item) === index), firstMatched.id]);
            //    check duplicates, only pass unique image id to matched array
            // matched.filter((item, index) => matched.indexOf(item) === index)

        }

        if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);


        dispatch(memoryGameTotalScore(gameScore))



    }, [openedCard]);







    return (
        <>
            {



                matched.length === 21 ? <Alert variant="success" className="text-center">
                    <Alert.Heading>Congratulations! You WON!!!</Alert.Heading>

                    <hr />
                    <button onClick={() => handleGameReset()} className="text-gray-200 bg-green-600 text-xl my-2 p-2 rounded-lg">Play again!</button>

                </Alert>


                    : ''


            }
            <div className="flex flex-wrap">


                {cardImages?.map((img, index) => {

                    let isFlipped = false;

                    if (openedCard.includes(index)) isFlipped = true;
                    if (matched.includes(img.id)) isFlipped = true;
                    return (
                        <div
                            className={`image-card m-1 border-b border-t-2 border-r-2 border-l-2 border-pink-400 ${isFlipped ? "flipped" : ""} `}
                            key={index}
                            onClick={() => flipCard(index)}
                        >
                            <div className="inner">
                                <div className="front">
                                    <img
                                        src={img.image}
                                        alt=""
                                        className='w-100 h-100 rounded-lg'
                                    />
                                </div>
                                <div className="back bg-indigo-900 hover:bg-indigo-400"></div>
                            </div>
                        </div>
                    );
                })}
            </div>


            <div className='text-center'>
                {cardImages.length === 0
                    ?
                    <button onClick={() => handLoadImage()} className="text-gray-200 bg-indigo-900 text-xl my-5 p-2 rounded-lg">START GAME</button>
                    :
                    <button onClick={() => handleGameReset()} className="text-gray-200 bg-red-600 text-xl my-2 p-2 rounded-lg">END GAME</button>
                }
            </div>
        </>
    );
}




export default MemoryGame


