import React, { useEffect, useState } from 'react'
import MyNavBar from '../Feeds/MyNavBar'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import MovieList from './MovieList'
import MovieSearch from './MovieSearch'
import { fetchMovies, } from '../../redux/actions'
import Footer from '../Feeds/Footer'
import CrytoNews from '../Crypto/CryptoNews'
import MovieCatalog from './MovieCatalog'
import Player from '../Music/Player'




const Movies = () => {

    const dispatch = useDispatch()

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        dispatch(fetchMovies())
        scrollTop()
    }, [])


    return (
        <div className='mx-5'>

            {

                (<Container fluid>
                    <Row className='sticky-top '>

                        <div className="mb-5 " >
                            <MyNavBar />
                        </div>
                    </Row>

                    <Row className=' '>
                        <Col md={3} className=' '>
                            <div className="sticky top-40 shadow-2xl  flex-wrap mx-1 drop-shadow-2xl  rounded " >


                                <MovieCatalog />
                                <div className="my-2"><CrytoNews /></div>
                                <div><Footer /></div>

                            </div>
                        </Col>
                        <Col md={9}>
                            <div className=" border-blue-600 drop-shadow-2xl border-b-2 rounded mx-2 shadow-2xl" >
                                <MovieSearch />
                                <MovieList />
                                {/* <Player /> */}
                            </div>
                        </Col>
                        {/* <Col md={3}>
                            <div className=" sticky top-40 shadow-2xl flex-wrap mx-1 bg-indigo-700 border-pink-900 drop-shadow-2xl border-b-2 rounded " >

                                <SideBarRight />
                            </div>
                        </Col> */}
                        {/* </div> */}
                    </Row>

                </Container>)}
        </div>
    )
}

export default Movies
