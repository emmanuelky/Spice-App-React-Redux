import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosArrowDropdown } from "react-icons/io";



const MyNavBar = () => {
    return (

        <Navbar expand="lg" className='border-b border-gray-800 pt-4'  >
            <Container>
                <Link to="/">
                    <Navbar className="text-light align-self-center text-3xl border-t-2 border-b-2 border-l-2 border-dotted p-2">SpIcE</Navbar>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" className="text-light text-sm align-self-center border-b-2 hover:bg-blue-600 rounded-full ">Feeds</Nav.Link>
                        <Nav.Link href="/music" className="text-light mx-5 text-sm align-self-center border-b-2 hover:bg-blue-600 rounded-full">Music</Nav.Link>
                        <Nav.Link href="/movies" className="text-light text-sm align-self-center border-b-2 hover:bg-blue-600 rounded-full">Movies</Nav.Link>

                    </Nav>
                    <Nav className="">

                        <Nav.Link className="text-light text-xs align-self-center ">
                            <div className='flex'>
                                <div>
                                    <Link to='/profile'>
                                        <img className=" w-5 h-5 rounded-full" src="https://media-exp1.licdn.com/dms/image/C4D03AQGDf3sUhZgiOQ/profile-displayphoto-shrink_800_800/0/1628360955565?e=1638403200&v=beta&t=4nI5gHqJsfd2Vq8cMdf_jfEBk_QCqTxU6rVV4tqsW8U" alt="" />
                                    </Link>
                                </div>
                                <div className='align-self-center m-1'>
                                    <IoIosArrowDropdown />
                                </div>
                            </div>
                        </Nav.Link>

                        <Nav.Link className="text-light text-xs align-self-center"></Nav.Link>
                        <Nav.Link href="/profile" className="text-light text-xs align-self-center">Followers</Nav.Link>
                        <Nav.Link href="/profile" className="text-light text-xs align-self-center">Following</Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar >

    )
}

export default MyNavBar
