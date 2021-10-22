import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import AllCryptoMarket from './AllCryptoMarket'



const MyVerticallyCenteredModal = (props) => {

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
                    Crypto Market
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-black  '>
                {/* <h4>Crypto Prices</h4> */}
                <AllCryptoMarket />
            </Modal.Body>
            <Modal.Footer className='bg-black' >
                <Button variant="warning" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal