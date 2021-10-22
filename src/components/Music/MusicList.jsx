import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMusicSearch, addCurrentSong, addFavoriteSong, removeFavoriteSong, getArtistDetails } from '../../redux/actions'
import { Card, Button, Spinner, Container, Row, Col, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { ImMusic } from "react-icons/im";
import { ImPause2 } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { CgCloseR } from "react-icons/cg";




const MusicList = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isFavorite, setIsFavorite] = useState(false)
    const dispatch = useDispatch()
    const musicList = useSelector(state => state.music.music_lists)

    const artist = useSelector(state => state.music.artist_details)



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

    const toggleFavotiteSong = (song, e) => {
        return songId?.find(s => s === song.id) ? dispatch(removeFavoriteSong(song.id)) : (dispatch(addFavoriteSong(song)), setIsFavorite(!isFavorite))
    }

    const handleGetArtistId = (id) => {
        dispatch(getArtistDetails(id))
    }

    useEffect(() => {
        dispatch(getMusicSearch())
    }, [])

    return (
        <div className="" >
            {
                loading
                    ? (<Spinner animation="border" variant="success" />)
                    : musicList[0]?.data.data.map((music, i) =>
                    (<div>

                        <Container fluid>
                            <Row className="flex flex-wrap justify-between px-6 border-b my-4 rounded bg-gradient-to-tr from-green-800 via-blue-800 to-purple-800 border-gray-700 align-items-center">

                                <Col md={2}>

                                    <button onClick={() => (handleGetArtistId(music.artist.id))}> <img onClick={handleShow} className='w-10 h-10 rounded-lg my-1 ' src={music.artist.picture} alt="" /></button>
                                </Col>
                                <Col md={3}>

                                    <div><span className='text-gray-300 mx-2 text-xs md:text-sm  text-justify '>{music.title_short}</span></div>
                                </Col>
                                <Col md={2}>

                                    <div className='text-gray-400 text-xs mx-2'><i>by {music.artist.name}</i></div>
                                </Col>

                                <Col md={2} >

                                    <button onClick={(e) => handleSongPlay(music, e)} className='text-blue-600 text-xl cursor-pointer'>{<ImMusic />}</button>
                                </Col>
                                <Col md={2}>

                                    <button onClick={(e) => toggleFavotiteSong(music, e)} className='text-2xl text-blue-100 cursor-pointer'>{songId?.find(s => s === music.id) ? <AiOutlineHeart className='bg-pink-600 rounded-full text-xl cursor-pointer' /> : <AiOutlineHeart className='cursor-pointer text-xl ' />}</button>
                                </Col>
                                <Col md={1}>

                                    <div className='text-gray-400 text-xs mx-4'> <i>{addDecimalToSongDuration(music.duration)}</i></div>
                                </Col>

                            </Row>

                        </Container>
                    </div>)
                    )
            }















            <div >
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header className='bg-black' closeButton>
                        <Modal.Title className='text-gray-100'>Artist Page</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-black  '>


                        <Row className=''>
                            <Card className='mx-auto bg-black text-gray-200'>
                                <Card.Img variant="top" className='img-fluid' src={musicList[0]?.data.data[0]?.artist?.picture_big} />
                                <Card.Body>
                                    <Card.Title className='text-center' >{musicList[0]?.data.data[0]?.artist?.name} </Card.Title>
                                    <Card.Text className='my-4 text-center'>
                                        Album Title - {artist[0]?.data.data[0]?.album?.title}
                                    </Card.Text>
                                    <Card.Text className=''>
                                        Tracks:

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                        {artist[0]?.data.data.map((art) => (
                            <>

                                <Container fluid key={art.id} className=''>



                                    <Row className="p-2 flex justify-center mt-0 align-items-center border-b border-gray-500 ">


                                        <span className=" rounded-full p-1  text-xs text-gray-300 ">{art.title_short}</span>


                                    </Row>

                                </Container>
                            </>))}
                    </Modal.Body>
                    <Modal.Footer className='bg-black'>
                        <Button variant="danger" onClick={handleClose}>
                            <CgCloseR />
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>




        </div>
    )
}

export default MusicList
