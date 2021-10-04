import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { fetchMovies } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'


const MovieSearch = () => {


    const dispatch = useDispatch()



    useEffect((e) => {
        dispatch(fetchMovies(e))
    }, [])


    return (
        <div className='sticky top-20 z-40 bg-gray-900 my-5 focus:ring-2 focus:ring-blue-600'>
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
