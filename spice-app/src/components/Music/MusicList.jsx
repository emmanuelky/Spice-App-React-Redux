import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMusicSearch } from '../../redux/actions'




const MusicList = () => {

    const dispatch = useDispatch()
    const musicList = useSelector(state => state.music.music_lists)
    console.log(musicList)


    useEffect(() => {
        dispatch(getMusicSearch())
    }, [])
    return (
        <div>

        </div>
    )
}

export default MusicList
