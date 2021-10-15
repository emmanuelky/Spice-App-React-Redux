import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useSelector, useDispatch } from 'react-redux'
import ReactAudioPlayer from 'react-audio-player';



const Player = () => {

    // const [isPlaying, setIsPlaying] = useState(false)
    const currentSong = useSelector(state => state.music.current_song)
    console.log(currentSong)

    // useEffect(() => {
    //     // setIsPlaying(!isPlaying)
    // }, [currentSong])

    return (
        <div className='relative'>
            <div className='absolute fixed-bottom flex justify-center bg-pink-800 align-items-center py-2 rounded-full' >


                {/* <ReactPlayer url={currentSong?.preview}
                    // playing
                    controls={true}

                    className="mx-auto text-blue-600"
                    pip={true}
                    stopOnUnmount={true}
                    loop={true}
                // playIcon={<img src={currentSong?.album.cover} alt="" />}
                /> */}

                <div className='flex align-items-center'>
                    <img className="h-20 w-20 rounded-full mx-2" src={currentSong?.artist.picture} alt="" />
                    <div className='flex flex-col mx-2'>
                        <h6 className='mx-1 text-gray-200'>{currentSong?.title_short}</h6>
                        <span className='mx-auto text-sm text-gray-200'><i>{currentSong?.artist.name}</i></span>
                    </div>
                </div>
                <div className='mx-2'>

                    <ReactAudioPlayer
                        src={currentSong?.preview}
                        autoPlay
                        controls
                        className="mx-auto text-blue-600"
                        loop={true}
                    />
                </div>


            </div>

        </div>
    )
}

export default Player
