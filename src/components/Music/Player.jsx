import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useSelector, useDispatch } from 'react-redux'
import ReactAudioPlayer from 'react-audio-player';
import { CgCloseR } from "react-icons/cg";
import Moveable from "react-moveable";
import { Badge } from 'react-bootstrap';
import { ImMusic } from "react-icons/im";




const Player = () => {

    const [closePlayer, setClosePlayer] = useState(null)
    // const [showPlayer, setShowPlayer] = useState(null)

    const [frame, setFrame] = useState({})


    const currentSong = useSelector(state => state.music.current_song)
    // console.log(currentSong)


    const handleClosePlayer = () => {
        setClosePlayer(true)
    }

    // const handleShowPlayer = () => {
    //     setShowPlayer(true)
    // }

    useEffect(() => {
        setFrame({
            translate: [0, 0]
        })
        setClosePlayer(false)
    }, [])




    console.log(closePlayer)


    return (

        <div className={closePlayer ? 'hidden' : 'block'}>

            <div className={currentSong === null ? 'hidden' : 'fixed-bottom flex justify-center '} >
                <div className={'flex justify-evenly target opacity-80 bg-pink-800 align-items-center py-1 rounded-full'}>

                    <div className={currentSong === null ? 'hidden' : 'flex align-items-center'}>
                        <img className="h-10 w-10 rounded-full mx-2" src={currentSong?.artist.picture} alt="" />
                        <div className='flex'>
                            <h6 className=' text-gray-200 mx-4'>{currentSong?.title_short}</h6>
                            <span className='mx-auto text-sm text-gray-200'><i>- {currentSong?.artist.name}</i></span>
                        </div>
                    </div>
                    <div className={currentSong === null ? 'hidden' : 'mx-5'}>

                        <ReactAudioPlayer
                            src={currentSong?.preview}
                            autoPlay
                            controls
                            className="mx-auto text-blue-600"
                            loop={true}
                            volume={0.1}
                        />
                    </div>
                </div>



                {/* <div >
                    <Badge pill onClick={() => handleShowPlayer()} className={" bg-pink-900 cursor-pointer"}>Show Player <ImMusic /></Badge>

                </div> */}

                <div >
                    <Badge pill onClick={() => handleClosePlayer()} className={" bg-pink-900 cursor-pointer  "}>Hide Player <ImMusic /></Badge>

                </div>








            </div>

            <Moveable
                target={document.querySelector(".target")}
                draggable={true}
                throttleDrag={0}
                onDragStart={({ set }) => {
                    set(frame.translate);
                }}
                onDrag={({ target, beforeTranslate }) => {
                    frame.translate = beforeTranslate;
                    target.style.transform
                        = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
                }}
                onDragEnd={({ target, isDrag, clientX, clientY }) => {
                    console.log("onDragEnd", target, isDrag);
                }}
            />







        </div>

    )
}

export default Player
