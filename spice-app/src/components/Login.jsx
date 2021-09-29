import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/actions'

const Login = () => {
    // const [username]
    const allUsers = useSelector(state => state.users.users)
    console.log(allUsers)

    const getUsersEmail = allUsers?.map((user) => user.email)
    const getUsersPassword = allUsers?.map((user) => (user.password))

    const usersEmailAndPasswords = getUsersEmail.concat(getUsersPassword)

    console.log(usersEmailAndPasswords)
    return (
        <div>

        </div>
    )
}

export default Login
