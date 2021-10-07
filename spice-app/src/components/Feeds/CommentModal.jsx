
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import CommentBox from './CommentBox'



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
                    <div className='w-80'>Picture
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" alt="" /></div>
                    <div className='w-80 flex flex-col'>
                        <CommentBox />
                    </div>

                </div>

            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide} className=" text-red-600 hover:text-gray-200  p-2  text-sm align-self-center  border-red-600  border-t-2 border-b-2 hover:bg-red-800 rounded-full ">close</button>

                {/* <Button >Close</Button> */}
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal

