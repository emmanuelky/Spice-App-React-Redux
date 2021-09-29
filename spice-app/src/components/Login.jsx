import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/actions'
import { Form, Button, Alert } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const Login = ({ history }) => {
    const [useremail, setUseremail] = useState('')
    const [userpassword, setUserpassword] = useState('')
    const [loggedin, setLoggedin] = useState(false)


    const allUsers = useSelector(state => state.users.users)
    console.log(allUsers)

    const getUsersEmail = allUsers?.map((user) => user.email)
    const getUsersPassword = allUsers?.map((user) => (user.password))
    const usersEmailsAndPasswords = getUsersEmail?.concat(getUsersPassword)

    console.log(usersEmailsAndPasswords)


    const handleEmailInputChange = (e) => {
        setUseremail(e.target.value)
    }

    const handlePasswordInputChange = (e) => {
        setUserpassword(e.target.value)
    }


    const confirmLoginDetails = () => {
        // if (usersEmailsAndPasswords.includes(useremail && userpassword)) {
        return history.push('/')
        // }

    }


    return (
        <div className='w-50 mx-auto py-40'>
            <Form>
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

                <Button onClick={() => confirmLoginDetails()} variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    )
}

export default withRouter(Login)
