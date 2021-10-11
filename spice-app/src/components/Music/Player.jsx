import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useSelector, useDispatch } from 'react-redux'



const Player = () => {




    return (
        <div>
            <ReactPlayer url='https://cdns-preview-3.dzcdn.net/stream/c-3be8a7e6ae1b8c6ba30a81bd3525a4b2-6.mp3'
                playing
                controls={true}
                width={300}
                pip={true}
                stopOnUnmount={false}
                loop={true}
            />

        </div>
    )
}

export default Player
