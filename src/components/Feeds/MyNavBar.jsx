import React, { useEffect } from 'react'
import { Navbar, Container, Nav, NavDropdown, Row, Col, Badge } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { AiOutlineDingding } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import Footer from './Footer'
import { fetchUsers } from '../../redux/actions'
import logo from './logo.png'
import moment from 'moment'
import CurrentTime from './CurrentTime';




const MyNavBar = ({ history }) => {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.users.getcurrentuser)
    const currentUserObjLength = Object.keys(currentUser).length
    // console.log(currentUser.following)


    const myAddedFollowers = useSelector(state => state.users.following)
    const totalNumOfMyFollowers = myAddedFollowers?.length

    // console.log(totalNumOfMyFollowers)


    // const unFollowingUserList = useSelector(state => state.users.unfollowing_user_list)
    // const totalNumOfUnfollowingUsers = unFollowingUserList?.length

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    // const checkLoginUser = () => {
    //     currentUserObjLength < 0 ? (history.push('/login')) : history.push('/')
    // }
    // checkLoginUser()

    return (
        <>
            <Container>
                <Row>
                    <div className='border-b bg-gray-900 border-gray-800 pt-3'>
                        <Navbar expand="lg" className='border-b-2 border-gray-900 pt-1 sticky-top'  >
                            <Col md={3}>

                                <Link to="/">
                                    <Navbar className="text-light align-self-center text-5xl p-2"><img className="w-50 h-50" src={logo} alt="" /> </Navbar>
                                </Link>
                            </Col>
                            <Col md={9}>


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
                                                <div className='align-self-center p-1 text-xs mx-2 '>
                                                    <Link to={`/profile/${currentUser.id}`}>
                                                        {<img className=" w-5 h-5 rounded-full" src={currentUserObjLength > 0 ? currentUser?.image : (history.push('/login'))} alt="" />}
                                                        <span className='no-underline text-blue-600'>{currentUserObjLength > 0 ? currentUser?.firstName : (history.push('/login'))}</span>
                                                    </Link>
                                                </div>
                                                <div className='align-self-center '>
                                                    <NavDropdown title="" id="basic-nav-dropdown" className="text-light align-self-center text-purple-50">
                                                        <Link to={`/profile/${currentUser.id}`}>
                                                            <NavDropdown.Item href="#action/3.1" >Profile</NavDropdown.Item>
                                                            <NavDropdown.Item href="#action/3.2"  >Following {`(${totalNumOfMyFollowers > 0 ? totalNumOfMyFollowers : 0})`}</NavDropdown.Item>
                                                            {/* <NavDropdown.Item href="#action/3.2"  >Unfollowing {`(${totalNumOfUnfollowingUsers > 0 ? totalNumOfUnfollowingUsers : 0})`}</NavDropdown.Item> */}
                                                            <NavDropdown.Item href="#action/3.3">Followers</NavDropdown.Item>
                                                        </Link>
                                                        <NavDropdown.Divider />
                                                        <Link to='/login'>
                                                            <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                                                        </Link>
                                                    </NavDropdown>

                                                </div>
                                            </div>
                                        </Nav.Link>

                                        <Nav.Link className="text-light text-xs align-self-center"></Nav.Link>
                                        <Link to={`/profile/${currentUser.id}`}>
                                            <Nav.Link href="/profile" className="mx-1 text-light text-xs align-self-center border-green-900 border-b-2 rounded-full hover:bg-blue-800">Following  <Badge className=" bg-blue-600"> {totalNumOfMyFollowers > 0 ? totalNumOfMyFollowers : 0}</Badge> </Nav.Link>
                                        </Link>
                                        <Link to={`/profile/${currentUser.id}`}>

                                            {/* <Nav.Link href="/profile" className="mx-1 text-light text-xs align-self-center border-blue-600 border-b-2 rounded-full hover:bg-blue-800">Unfollowing  {`(${totalNumOfUnfollowingUsers > 0 ? totalNumOfUnfollowingUsers : 0})`}</Nav.Link> */}
                                            <Nav.Link href="/profile" className="mx-1 text-light text-xs align-self-center border-green-900 border-b-2 rounded-full hover:bg-blue-800">Followers <Badge className=" bg-blue-600"> 0 </Badge></Nav.Link>
                                        </Link>
                                        <Nav.Link>
                                            <div className='mb-10 border-b-2 block md:hidden  border-gray-600'>
                                                <Footer />
                                            </div>
                                        </Nav.Link>
                                    </Nav>


                                </Navbar.Collapse>
                            </Col>
                        </Navbar >

                    </div>
                </Row>
            </Container>
            <div className=""><CurrentTime /></div>
        </>)
}

export default withRouter(MyNavBar)
