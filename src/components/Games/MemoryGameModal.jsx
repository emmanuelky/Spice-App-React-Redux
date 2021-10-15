import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import MemoryGame from './MemoryGame';



const MemoryGameModal = (props) => {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='md:overflow-x-auto'
        >
            <Modal.Header className='bg-black text-gray-300' closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Memory Game
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-black  '>

                <MemoryGame />
            </Modal.Body>
            <Modal.Footer className='bg-black' >
                <Button variant="warning" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MemoryGameModal