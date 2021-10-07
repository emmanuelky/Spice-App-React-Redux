
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import CommentBox from './CommentBox'
import CommentPhotoSection from './CommentPhotoSection'
import { GrClose } from "react-icons/gr";




const MyVerticallyCenteredModal = (props) => {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    hi
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <div className='flex justify-around'>
                    <div className='w-80'>
                        <CommentPhotoSection />

                    </div>
                    <div className='w-80 flex flex-col'>
                        <CommentBox />
                    </div>

                </div>

            </Modal.Body>
            <Modal.Footer>
                <div onClick={props.onHide} className="text-2xl "><GrClose /></div>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal

