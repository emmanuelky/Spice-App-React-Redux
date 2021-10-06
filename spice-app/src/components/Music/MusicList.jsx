import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMusicSearch } from '../../redux/actions'
import { Card, Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'





const MusicList = () => {

    const dispatch = useDispatch()
    const musicList = useSelector(state => state.music.music_lists)
    // console.log(musicList)

    const loading = useSelector(state => state.music.loading)

    return (
        <div className="flex flex-wrap justify-center pb-5" >
            {
                loading
                    ? (<Spinner animation="border" variant="success" />)
                    : musicList[0]?.data.data.map((music) =>
                    (
                        <Link to={`/music/${music.id}/credits`} className="no-underline">
                            <Card key={music.id} className='w-40 h-40 mx-1 my-5  hover:border-yellow-600 text-gray-300 hover:text-gray-50 border-blue-600 border-b-2 hover:bg-blue-800 rounded-full' >
                                <Card.Img variant="top" className="img-fluid" src={music.album.cover_medium} />
                                <Card.Body>
                                    <Card.Text className='text-center'>
                                        {music.title_short}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Link>
                    )
                    )
            }
        </div>
    )
}

export default MusicList
