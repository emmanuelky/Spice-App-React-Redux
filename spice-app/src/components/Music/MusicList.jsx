import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMusicSearch } from '../../redux/actions'
import { Card, Button, Spinner, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { ImPlay2 } from "react-icons/im";
import { GiLoveSong } from "react-icons/gi";










const MusicList = () => {

    const dispatch = useDispatch()
    const musicList = useSelector(state => state.music.music_lists)
    console.log(musicList)

    const loading = useSelector(state => state.music.loading)


    const addDecimalToSongDuration = (duration) => {
        return Number(duration / 100).toFixed(2)
    }

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
                            <Row className="  flex justify-between border-b my-4 border-gray-700 align-items-center">

                                <Col md={2}>

                                    <div> <img className='w-10 h-10 rounded-lg ' src={music.artist.picture} alt="" /></div>
                                </Col>
                                <Col md={3}>

                                    <div><span className='text-gray-300 mx-2  text-justify '>{music.title_short}</span></div>
                                </Col>
                                <Col md={2}>

                                    <div className='text-gray-600 text-xs mx-2'><span>by</span> <i>{music.artist.name}</i></div>
                                </Col>

                                <Col md={2}>

                                    <div className='text-blue-600 text-3xl'><ImPlay2 /></div>
                                </Col>
                                <Col md={2}>

                                    <div className='text-3xl text-gray-200'><GiLoveSong /></div>
                                </Col>
                                <Col md={1}>

                                    <div className='text-gray-600 text-xs mx-4'> <i>{addDecimalToSongDuration(music.duration)}</i></div>
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
