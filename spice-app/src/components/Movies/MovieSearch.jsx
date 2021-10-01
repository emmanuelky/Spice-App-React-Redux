import React from 'react'
import { Form } from 'react-bootstrap'

const MovieSearch = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="search" placeholder="search movies" />
                </Form.Group>

            </Form>
        </div>
    )
}

export default MovieSearch
