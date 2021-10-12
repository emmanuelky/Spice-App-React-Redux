import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useSelector, useDispatch } from 'react-redux'
import ReactAudioPlayer from 'react-audio-player';



const Player = () => {

    // const [isPlaying, setIsPlaying] = useState(false)
    const currentSong = useSelector(state => state.music.current_song)
    // console.log(currentSong)

    // useEffect(() => {
    //     // setIsPlaying(!isPlaying)
    // }, [currentSong])

    return (
        <div className='relative'>
            <div className='absolute fixed-bottom'>


                {/* <ReactPlayer url={currentSong?.preview}
                    // playing
                    controls={true}

                    className="mx-auto text-blue-600"
                    pip={true}
                    stopOnUnmount={true}
                    loop={true}
                // playIcon={<img src={currentSong?.album.cover} alt="" />}
                /> */}



                <ReactAudioPlayer
                    src={currentSong?.preview}
                    autoPlay
                    controls
                    className="mx-auto text-blue-600"
                    onPause
                />
            </div>

        </div>
    )
}

export default Player
