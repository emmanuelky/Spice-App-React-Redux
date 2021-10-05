import React, { useEffect } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { AiOutlineDingding } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import Footer from './Footer'
import { fetchUsers } from '../../redux/actions'





const MyNavBar = ({ history }) => {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.users.getcurrentuser)
    const currentUserObj = Object.keys(currentUser).length


    // console.log(currentUserObj)


    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    // const checkLoginUser = () => {
    //     currentUserObj < 0 ? (history.push('/login')) : history.push('/')
    // }
    // checkLoginUser()

    return (
        <div className='border-b bg-gray-900 border-gray-800 pt-3'>
            <Navbar expand="lg" className='border-b-2 border-gray-900 pt-1 sticky-top'  >
                <Container>
                    <Link to="/">
                        <Navbar className="text-light align-self-center text-5xl border-t-2 border-b-2 border-dashed p-2">SpIcE </Navbar>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                    <Navbar.Collapse id="basic-navbar-nav " className=''>
                        <Nav className="mx-auto">
                            <Link to='/' className="mx-auto ">
                                <button className="text-light  p-2  text-sm align-self-center border-blue-600 border-b-2 hover:bg-blue-800 rounded-full ">Feeds</button>
                            </Link>
                            <Link to='/music' className="mx-auto">
                                <button className="text-light p-2  mx-5 text-sm align-self-center border-blue-600 border-b-2 hover:bg-blue-800 rounded-full">Music</button>
                            </Link>
                            <Link to='/movies' className="mx-auto">
                                <button className="text-light p-2  text-sm align-self-center border-blue-600 border-b-2 hover:bg-blue-800 rounded-full">Movies</button>
                            </Link>
                            <Nav.Link href="/" className="text-light text-sm align-self-center  hover:bg-blue-800 rounded-full">
                                <div className=' my-5 p-2 gap-4 text-sm bg-gray-900 w-100 h-100  block md:hidden '>
                                    <div className='text-light md:text-xs'><h5 className='text-center md:text-xs'>Play Games</h5></div>

                                    <div className=' md:text-xs md:flex-col  relative mx-5 '>
                                        <div className='absolute -inset-0.5 opacity-50 bg-blue-600    rounded-lg blur-xl '></div>
                                        <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative '>Bugs Killer </div> </div>
                                    <div className=' md:text-xs md:flex-col relative mx-4 '>
                                        <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                                        <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative '>Bugs Killer</div> </div>

                                    <div className=' md:text-xs md:flex-col relative mx-3 '>
                                        <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                                        <div className='bg-gray-900 hover:bg-pink-600  rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative '>Bugs Killer</div> </div>
                                </div>
                            </Nav.Link>

                        </Nav>

                        <Nav>
                            <Nav.Link className="text-light text-xs align-self-center ">
                                <div className='flex bg-gray-200 rounded-full  px-1 border-blue-600 border-b-2'>
                                    <div className='align-self-center'>
                                        <Link to='/profile'>
                                            {<img className=" w-5 h-5 rounded-full" src={currentUserObj > 0 ? currentUser?.image : (history.push('/login'))} alt="" />}
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
                                            <Link to='/login'>
                                                <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                                            </Link>
                                        </NavDropdown>

                                    </div>
                                </div>
                            </Nav.Link>

                            <Nav.Link className="text-light text-xs align-self-center"></Nav.Link>
                            <Nav.Link href="/profile" className="mx-1 text-light text-xs align-self-center border-blue-600 border-b-2 rounded-full hover:bg-blue-800">Followers (0)</Nav.Link>
                            <Nav.Link href="/profile" className="mx-1 text-light text-xs align-self-center border-blue-600 border-b-2 rounded-full hover:bg-blue-800">Following (0)</Nav.Link>
                            <Nav.Link>
                                <div className='mb-10 border-b-2 block md:hidden  border-gray-600'>
                                    <Footer />
                                </div>
                            </Nav.Link>
                        </Nav>


                    </Navbar.Collapse>

                </Container>

            </Navbar >

        </div>
    )
}

export default withRouter(MyNavBar)
