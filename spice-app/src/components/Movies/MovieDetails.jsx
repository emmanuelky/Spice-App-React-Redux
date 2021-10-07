
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Button, Spinner, Container, Row, Col, Carousel } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies, getMovieDetails } from '../../redux/actions'
import MyNavBar from '../Feeds/MyNavBar'
import SideBarLeft from '../Feeds/SideBarLeft'
import SideBarRight from '../Feeds/SideBarRight'
import { Link } from 'react-router-dom'




const MovieDetails = () => {

    const { id } = useParams()
    console.log(id)

    const dispatch = useDispatch()

    const movieDetail = useSelector(state => state.movies.movie_details)
    console.log(movieDetail[0])


    const loading = useSelector(state => state.movies.loading)

    const IMG_URL = 'https://image.tmdb.org/t/p/original'

    // const movie_URL = 'https://api.themoviedb.org/3/search/movie/'

    const shortTitle = (title) => {

        let newTitle = title.split(" ", 2)
        return newTitle[0] + ' ' + newTitle[1]
    }

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        dispatch(getMovieDetails(id))
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
                            <div className="sticky top-20 shadow-2xl flex flex-wrap mx-1 drop-shadow-2xl  rounded " >

                                <SideBarLeft />

                            </div>
                        </Col>
                        <Col md={6}>

                            <div className=" border-blue-600 drop-shadow-2xl border-b-2 rounded my-2 mx-2 shadow-2xl" >
                                <div className="flex flex-wrap justify-center my-5" >
                                    {
                                        loading
                                            ? (<Spinner animation="border" variant="success" />)
                                            : (
                                                <Card key={movieDetail[0]?.data.id} className=' mx-4 my-2  hover:border-purple-800 hover:text-gray-200 border-blue-600 border-b-2 hover:bg-blue-800 rounded-full' >
                                                    <Card.Img variant="top" className="img-fluid" src={IMG_URL + movieDetail[0]?.data.poster_path} />
                                                    <Card.Body>

                                                        <Card.Text className='text-center'>
                                                            {movieDetail[0]?.data.character}
                                                        </Card.Text>

                                                    </Card.Body>
                                                </Card>
                                            )

                                    }
                                </div>
                                <div className='mt-4'>
                                    <h6 className='text-center text-gray-300'>Cast</h6>

                                </div>
                                <div className=" flex flex-wrap overflow-x-auto mb-5 text-gray-200 border overflow-y-hidden  ">
                                    <Card className="movie-scroller w-20 h-20 flex flex-wrap  " >

                                        {
                                            movieDetail[1]?.data.cast?.map(m => (
                                                <>
                                                    <Card.Img variant="top" className='' src={IMG_URL + m.profile_path} />
                                                    <span className='text-xs mx-2 my-auto align-self-center' > {m.name}</span>
                                                </>))
                                        }

                                    </Card>
                                </div>


                                {


                                    <div className='flex justify-around rounded-lg bg-black  my-10 p-5'>
                                        <div className='flex flex-col my-auto'>
                                            <div className='flex flex-col'> <span className='text-sm text-gray-400'>Origin</span> <span className='text-sm text-gray-700 '>{movieDetail[0]?.data.production_countries[0]?.name}</span>
                                            </div>
                                            <div className='flex flex-col my-4'>  <span className='text-sm text-gray-400'>Language</span> <span className='text-sm text-gray-700'>{movieDetail[0]?.data.spoken_languages[0]?.name}</span>
                                            </div>


                                        </div>
                                        <div className='flex flex-col my-auto'>
                                            <div className='flex flex-col'> <span className='text-sm text-gray-400'>Released-date</span> <span className='text-sm text-gray-700'>{movieDetail[0]?.data.release_date}</span>
                                            </div >
                                            <div className='flex flex-col my-4'> <span className='text-sm text-gray-400'>Genre</span> <span className='text-sm text-gray-700'>{movieDetail[0]?.data.genres[0]?.name}</span>
                                            </div>


                                        </div>
                                        <div className='flex flex-col my-auto'>
                                            <div className='flex flex-col'> <span className='text-sm text-gray-400'>Run-time</span> <span className='text-sm text-gray-700'>{movieDetail[0]?.data.runtime} min</span>
                                            </div>
                                            <div className='flex flex-col my-4'> <span className='text-sm text-gray-400'>Popularity</span> <span className='text-sm text-gray-700'>{movieDetail[0]?.data.popularity}</span>
                                            </div>


                                        </div>


                                    </div>}
                                <div className='flex justify-center mt-0 mb-4'>

                                    <Link to="/movies">

                                        <div className="text-light text-lg p-2 align-self-center border-blue-600 border-b-2 border-t-2 hover:bg-blue-800 rounded-full">Back</div>
                                    </Link>
                                </div>

                            </div>

                        </Col>
                        <Col md={3}>
                            <div className=" sticky top-20 shadow-2xl flex flex-wrap mx-1 border-blue-900 drop-shadow-2xl border-b-2 rounded " >

                                <SideBarRight />

                            </div>
                        </Col>

                    </Row>

                </Container>)
            }
        </div >

    )
}

export default MovieDetails
