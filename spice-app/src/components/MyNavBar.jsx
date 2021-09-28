import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiFillGitlab } from "react-icons/ai";



const MyNavBar = () => {
    return (

        <Navbar expand="lg" className='border-b border-gray-800 pt-4'  >
            <Container>



                <Link to="/">
                    <Navbar className="text-light align-self-center text-3xl border-t-2 border-b-2 border-l-2 border-dotted p-2">SpIcE <AiFillGitlab className=" text-blue-600 " /> </Navbar>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" className="text-light text-sm align-self-center border-blue-600 border-b-2 hover:bg-blue-800 rounded-full ">Feeds</Nav.Link>
                        <Nav.Link href="/music" className="text-light mx-5 text-sm align-self-center border-blue-600 border-b-2 hover:bg-blue-800 rounded-full">Music</Nav.Link>
                        <Nav.Link href="/movies" className="text-light text-sm align-self-center border-blue-600 border-b-2 hover:bg-blue-800 rounded-full">Movies</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link className="text-light text-xs align-self-center ">
                            <div className='flex bg-gray-200 rounded-full  px-1 border-blue-600 border-b-2'>
                                <div className='align-self-center'>
                                    <Link to='/profile'>
                                        <img className=" w-5 h-5 rounded-full" src="https://media-exp1.licdn.com/dms/image/C4D03AQGDf3sUhZgiOQ/profile-displayphoto-shrink_800_800/0/1628360955565?e=1638403200&v=beta&t=4nI5gHqJsfd2Vq8cMdf_jfEBk_QCqTxU6rVV4tqsW8U" alt="" />
                                    </Link>
                                </div>
                                <div className='align-self-center '>
                                    <NavDropdown title="" id="basic-nav-dropdown" className="text-light align-self-center text-purple-50">
                                        <Link to='/profile'>
                                            <NavDropdown.Item href="#action/3.1" >Profile</NavDropdown.Item>
                                        </Link>
                                        <NavDropdown.Item href="#action/3.2"  >Followers</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Following</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
                                    </NavDropdown>

                                </div>
                            </div>
                        </Nav.Link>

                        <Nav.Link className="text-light text-xs align-self-center"></Nav.Link>
                        <Nav.Link href="/profile" className="mx-1 text-light text-xs align-self-center border-blue-600 border-b-2 rounded-full hover:bg-blue-800">Followers (100)</Nav.Link>
                        <Nav.Link href="/profile" className="mx-1 text-light text-xs align-self-center border-blue-600 border-b-2 rounded-full hover:bg-blue-800">Following (2000)</Nav.Link>
                    </Nav>


                </Navbar.Collapse>

            </Container>
        </Navbar >

    )
}

export default MyNavBar
