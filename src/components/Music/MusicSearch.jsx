import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { getMusicSearch } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'


const MusicSearch = () => {


    const dispatch = useDispatch()



    return (
        <div className='sticky top-40 z-40 bg-gray-900  focus:ring-2 focus:ring-blue-600'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="search" placeholder="search for a song, artist or album"
                        onChange={(e) => dispatch(getMusicSearch(e.target.value))} />
                </Form.Group>

            </Form>
        </div>
    )
}

export default MusicSearch
