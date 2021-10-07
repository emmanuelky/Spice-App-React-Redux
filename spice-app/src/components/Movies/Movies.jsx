import React, { useEffect, useState } from 'react'
import MyNavBar from '../Feeds/MyNavBar'
import SideBarLeft from '../Feeds/SideBarLeft'
import SideBarRight from '../Feeds/SideBarRight'

import { Container, Row, Col } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import MovieList from './MovieList'
import MovieSearch from './MovieSearch'
import { fetchMovies, } from '../../redux/actions'
import Footer from '../Feeds/Footer'
import CrytoNews from '../Cryto/CrytoNews'
import UpComingMovies from './UpComingMovies'
import NowPlayingMovie from './NowPlayingMovie'
import FollowNewUsers from '../Feeds/FollowNewUsers'
import TopRatedMovies from './TopRatedMovies'
import LatestMovies from './LatestMovies'




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

                        <div className="mb-2 " >
                            <MyNavBar />
                        </div>
                    </Row>

                    <Row className=' '>
                        <Col md={3} className=' '>
                            <div className="sticky top-40 shadow-2xl  flex-wrap mx-1 drop-shadow-2xl  rounded " >
                                <div><UpComingMovies /></div>
                                <div><LatestMovies /> </div>
                                <div className="my-2"><CrytoNews /></div>
                                <div><Footer /></div>

                            </div>
                        </Col>
                        <Col md={6}>
                            <div className=" border-blue-600 drop-shadow-2xl border-b-2 rounded my-2 mx-2 shadow-2xl" >
                                <MovieSearch />
                                <MovieList />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className=" sticky top-40 shadow-2xl flex-wrap mx-1 border-blue-900 drop-shadow-2xl border-b-2 rounded " >

                                <div><NowPlayingMovie /></div>
                                <div><TopRatedMovies /> </div>
                                {/* <div><FollowNewUsers /> </div> */}
                            </div>
                        </Col>
                        {/* </div> */}
                    </Row>

                </Container>)}
        </div>
    )
}

export default Movies
