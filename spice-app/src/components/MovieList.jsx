import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from '../redux/actions'


const MovieList = () => {


    const allMovies = useSelector(state => state.movies.movies)
    console.log(allMovies)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    return (
        <>
            <h5 className='text-gray-200 text-center mb-5'>Movies</h5>
            <div className="flex flex-wrap justify-around gap-4">
                {
                    // allMovies?.map((movie) =>
                    (<Card >
                        <Card.Img variant="top" className="w-20 h-20" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" />
                        <Card.Body>
                            <Card.Title>Money Heist</Card.Title>
                            <Card.Text>
                                Nice holiday
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>)
                    // )
                }
                <Card >
                    <Card.Img variant="top" className="w-20 h-20" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" />
                    <Card.Body>
                        <Card.Title>Money Heist</Card.Title>
                        <Card.Text>
                            Nice holiday
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" className="w-20 h-20" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" />
                    <Card.Body>
                        <Card.Title>Money Heist</Card.Title>
                        <Card.Text>
                            Nice holiday
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" className="w-20 h-20" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" />
                    <Card.Body>
                        <Card.Title>Money Heist</Card.Title>
                        <Card.Text>
                            Nice holiday
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" className="w-20 h-20" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" />
                    <Card.Body>
                        <Card.Title>Money Heist</Card.Title>
                        <Card.Text>
                            Nice holiday
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" className="w-20 h-20" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" />
                    <Card.Body>
                        <Card.Title>Money Heist</Card.Title>
                        <Card.Text>
                            Nice holiday
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" className="w-20 h-20" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" />
                    <Card.Body>
                        <Card.Title>Money Heist</Card.Title>
                        <Card.Text>
                            Nice holiday
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" className="w-20 h-20" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" />
                    <Card.Body>
                        <Card.Title>Money Heist</Card.Title>
                        <Card.Text>
                            Nice holiday
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" className="w-20 h-20" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" />
                    <Card.Body>
                        <Card.Title>Money Heist</Card.Title>
                        <Card.Text>
                            Nice holiday
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default MovieList
