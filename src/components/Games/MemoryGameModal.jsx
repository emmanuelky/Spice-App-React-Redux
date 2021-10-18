import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import MemoryGame from './MemoryGame';
import { useSelector, useDispatch } from 'react-redux'


const MemoryGameModal = (props) => {

    const currentUser = useSelector(state => state.users.getcurrentuser)
    const gameScore = useSelector(state => state.games.memory_game_total_score)

    const totalScore = gameScore?.length > 0 ? gameScore?.reduce((acc, current) => acc + current) : gameScore?.length
    console.log(totalScore)


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='md:overflow-x-auto'
        >
            {/* closeButton */}
            <Modal.Header className='flex justify-between bg-black text-gray-300 px-5' >

                <Modal.Title id="contained-modal-title-vcenter">
                    <pre> Player:</pre>   <pre>{currentUser.firstName}</pre>
                </Modal.Title>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2>Memory Game</h2>
                </Modal.Title>
                <Modal.Title id="contained-modal-title-vcenter">
                    <pre>Total Score:</pre>  <h1><pre className='bg-green-700 text-center rounded-lg'>{totalScore}</pre></h1>
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