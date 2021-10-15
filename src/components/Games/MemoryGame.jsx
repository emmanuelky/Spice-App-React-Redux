import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cardImages from '../Games/MemoryGameImages/imagedata.json'


const MemoryGame = () => {

    const [allImages, setAllImages] = useState(null)

    useEffect(() => {
        setAllImages(cardImages)
    }, [])

    console.log(allImages)

    return (
        <Container fluid>
            {
                allImages?.images?.map((image) => (
                    <Row>
                        <Col md={2} className='border rounded-lg'>
                            <div><img src={image.image} alt="" /></div>
                        </Col>

                    </Row>
                ))
            }


        </Container>
    )
}

export default MemoryGame
