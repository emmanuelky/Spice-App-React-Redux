import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { ImPlay2 } from "react-icons/im";
import { FcDislike } from "react-icons/fc";
import { CgCloseR } from "react-icons/cg";
import { Badge, Button, Modal, Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addCurrentSong, removeFavoriteSong } from '../../redux/actions'


const FavoriteSong = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    const favoriteSongs = useSelector(state => state.music.favorite_songs)
    console.log(favoriteSongs)


    const handleSongPlay = (song, e) => {
        console.log(song.id, e)
        if (song) {
            dispatch(addCurrentSong(song))
        }

    }



    return (
        <div className='flex mx-auto justify-center border-b border-t border-l border-pink-600 md:flex-col'>
            <div className="flex text-gray-200 align-items-baseline px-3 mt-5 mx-auto">

                <div className='hidden flex-wrap md:block'> <h6>My Favorite Songs</h6></div>

            </div>
            <div className="flex justify-center my-5">

                <h3><Badge className=" bg-pink-600"><AiOutlineHeart className='my-2' />{favoriteSongs?.length}</Badge></h3>

            </div>

            <div className='hidden md:block'>
                {
                    favoriteSongs.slice(0, 4).map((favoriteSong) => (
                        <div key={favoriteSong.id} className="p-2  ' ">

                            <span className="bg-gradient-to-tr from-green-800 via-blue-800 to-purple-800 rounded-full p-1  text-xs text-gray-300 ">{favoriteSong.title_short}</span>


                        </div>
                    ))
                }
            </div>
            <div className=' justify-center p-2  text-sm hidden md:block'>
                {favoriteSongs.length > 4 && (<button onClick={handleShow} className="text-gray-300 bg-pink-600 rounded p-1 my-2 "> ...more</button>)}
            </div>






            <div >
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header className='bg-gray-900' closeButton>
                        <Modal.Title className='text-gray-100 '>Favorite Songs</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-pink-600 '>
                        {favoriteSongs.map((favoriteSong) => (
                            <>

                                <Container fluid key={favoriteSong.id}>
                                    <Row className="p-2 flex justify-between align-items-center border-b border-gray-500 ">

                                        <Col md={2}>
                                            <img className='w-10 h-10 rounded-full ' src={favoriteSong.artist.picture} alt="" />


                                        </Col>
                                        <Col md={3}>
                                            <span className=" rounded-full p-1  text-xs text-gray-300 ">{favoriteSong.title_short}</span>


                                        </Col>
                                        <Col md={3}>
                                            <span className=" rounded-full p-1  text-xs text-gray-300 ">{favoriteSong.artist.name}</span>


                                        </Col>

                                        <Col md={2} >
                                            <button onClick={(e) => handleSongPlay(favoriteSong, e)} className=" text-gray-100 cursor-pointer" ><ImPlay2 /></button>

                                        </Col>
                                        <Col md={2}>

                                            <button onClick={() => dispatch(removeFavoriteSong(favoriteSong.id))} className='bg-white rounded-full p-1'><FcDislike /></button>

                                        </Col>


                                    </Row>

                                </Container>
                            </>))}
                    </Modal.Body>
                    <Modal.Footer className='bg-gray-900'>
                        <Button variant="dark" onClick={handleClose}>
                            <CgCloseR />
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default FavoriteSong
