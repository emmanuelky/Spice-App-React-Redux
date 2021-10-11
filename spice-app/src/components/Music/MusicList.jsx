import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMusicSearch, addCurrentSong, addFavoriteSong, removeFavoriteSong } from '../../redux/actions'
import { Card, Button, Spinner, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { ImPlay2 } from "react-icons/im";
import { ImPause2 } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";






const MusicList = () => {

    // const [isPlaying, setIsPlaying] = useState(false)
    const dispatch = useDispatch()
    const musicList = useSelector(state => state.music.music_lists)
    console.log(musicList[0]?.data.data)

    const loading = useSelector(state => state.music.loading)

    const favoriteSongs = useSelector(state => state.music.favorite_songs)
    const songId = favoriteSongs?.map((favoriteSong) => favoriteSong.id)


    const addDecimalToSongDuration = (duration) => {
        return Number(duration / 100).toFixed(2)
    }


    const handleSongPlay = (song, e) => {
        console.log(song.id, e)
        if (song) {
            dispatch(addCurrentSong(song))
        }

    }

    const toggleFavotiteSong = (song) => {
        return songId.includes(song.id) ? dispatch(removeFavoriteSong(song.id)) : dispatch(addFavoriteSong(song))
    }

    // useEffect(() => {

    // }, [handleSongPlay()])

    return (
        <div className="" >
            {
                loading
                    ? (<Spinner animation="border" variant="success" />)
                    : musicList[0]?.data.data.map((music, i) =>
                    (<>
                        {/* <div className="  flex justify-between border-b my-4 border-gray-700 align-items-center"> */}
                        {/* // <Link to={`/music/${music.id}/`} className="no-underline"> */}
                        <Container fluid >
                            <Row className="  flex justify-between px-2 border-b my-4 rounded bg-gradient-to-tr from-green-800 via-blue-800 to-purple-800 border-gray-700 align-items-center">

                                <Col md={2}>

                                    <div> <img className='w-10 h-10 rounded-lg ' src={music.artist.picture} alt="" /></div>
                                </Col>
                                <Col md={3}>

                                    <div><span className='text-gray-300 mx-2  text-justify '>{music.title_short}</span></div>
                                </Col>
                                <Col md={2}>

                                    <div className='text-gray-400 text-xs mx-2'><i>by {music.artist.name}</i></div>
                                </Col>

                                <Col md={2} >

                                    <button onClick={(e) => handleSongPlay(music, e)} className='text-blue-600 text-3xl cursor-pointer'>{<ImPlay2 />}</button>
                                </Col>
                                <Col md={2}>

                                    <div onClick={() => toggleFavotiteSong(music)} className='text-2xl text-blue-100 cursor-pointer'><AiOutlineHeart /></div>
                                </Col>
                                <Col md={1}>

                                    <div className='text-gray-400 text-xs mx-4'> <i>{addDecimalToSongDuration(music.duration)}</i></div>
                                </Col>

                            </Row>

                        </Container>



                        {/* // </Link> */}
                        {/* </div> */}
                    </>)
                    )
            }
        </div>
    )
}

export default MusicList
