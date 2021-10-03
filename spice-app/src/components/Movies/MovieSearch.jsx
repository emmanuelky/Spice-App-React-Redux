import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { fetchMovies } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'


const MovieSearch = () => {


    const dispatch = useDispatch()
    const searchMovies = useSelector(state => state.movies.movies)


    useEffect(() => {
        dispatch(fetchMovies())
    }, [])


    return (
        <div className='sticky top-40 z-40 my-5 focus:ring-2 focus:ring-blue-600'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="search" placeholder="search movies"
                        onChange={(e) => dispatch(fetchMovies(e.target.value))} />
                </Form.Group>

            </Form>
        </div>
    )
}

export default MovieSearch
