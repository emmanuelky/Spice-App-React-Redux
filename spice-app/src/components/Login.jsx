import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, loggedinUser } from '../redux/actions'
import { Form, Button, Alert } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
import { AiOutlineDingding } from "react-icons/ai";



const Login = ({ history }) => {
    const [useremail, setUseremail] = useState('')
    const [userpassword, setUserpassword] = useState('')
    const [field, setField] = useState(false)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.users.users[0])
    // console.log(currentUser)




    // const getUsersEmail = allUsers?.map((user) => user.email)
    // const getUsersPassword = allUsers?.map((user) => (user.password))
    // const usersEmailsAndPasswords = getUsersEmail?.concat(getUsersPassword)




    const handleEmailInputChange = (e) => {
        setUseremail(e.target.value)
    }

    const handlePasswordInputChange = (e) => {
        setUserpassword(e.target.value)
    }



    const confirmLoginDetails = (id) => {
        if (id && (useremail && userpassword === '') || (useremail !== currentUser.email && userpassword !== currentUser.password)) {
            return setField(true)
        } else if (id && useremail === currentUser.email && userpassword === currentUser.password) {
            return history.push(`/`)
        } else {
            return
        }

    }


    return (
        <div className='flex flex-col pt-20 text-gray-300 align-items-center'>
            <div className="mb-10 mt-5 text-light align-self-center text-3xl border-t-2 border-b-2 border-dashed p-2">
                <h1 className="flex text-7xl"> SpIcE <AiOutlineDingding className=" text-blue-700 " /></h1>

            </div>
            <h1 className='text-center'>Login</h1>
            {field
                ? <Alert variant='danger'>
                    Please enter a valid email and password
                </Alert>
                : ''}
            <Form className='my-10'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        value={useremail}
                        onChange={(e) => handleEmailInputChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        value={userpassword}
                        onChange={(e) => handlePasswordInputChange(e)}

                    />
                </Form.Group>

                {<button onClick={() => confirmLoginDetails(currentUser.id)} type="submit" className="mx-3 my-4 text-center text-light text-xl p-2 flex border-grey-100 border-b-2 border-t-2 hover:border-grey-900 rounded-full ">
                    Login
                </button>}


            </Form>
            <div className="text-grey-100">Don't have an account?
                <Link to="/signup">Sign Up</Link> </div>
        </div>
    )
}

export default withRouter(Login)
