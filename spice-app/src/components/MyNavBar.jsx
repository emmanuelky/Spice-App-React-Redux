import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiOutlineDingding } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'





const MyNavBar = () => {

    const currentUser = useSelector(state => state.users.users[0])
    console.log(currentUser)

    return (
        <div className='border-b bg-gray-900 border-gray-800 pt-3'>
            <Navbar expand="lg" className='border-b-2 border-gray-900 pt-1 sticky-top'  >
                <Container>
                    <Link to="/">
                        <Navbar className="text-light align-self-center text-3xl border-t-2 border-b-2 border-dashed p-2">SpIcE-It <AiOutlineDingding className=" text-grey-700 " /> </Navbar>
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
                                            {<img className=" w-5 h-5 rounded-full" src={currentUser?.image} alt="" />}
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

        </div>
    )
}

export default MyNavBar
