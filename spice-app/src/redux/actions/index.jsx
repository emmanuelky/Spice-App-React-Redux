import axios from 'axios'

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const posts = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/`)
        const postsArray = posts.data
        dispatch({
            type: 'FETCH_POSTS',
            payload: postsArray,
        })

    }
}


export const addPosts = (post) => {
    return async (dispatch, getState) => {

        const posts = await axios.post(`${process.env.REACT_APP_BASE_URL}/posts/`, post)
        // const postsArray = posts.data
        dispatch({
            type: 'ADD_POST',
            payload: posts
        })
    }
}




export const fetchUsers = () => {
    return async (dispatch, getState) => {
        const users = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`)
        const usersArray = users.data
        // console.log(usersArray)
        dispatch({
            type: 'FETCH_USERS',
            payload: usersArray,
        })

    }
}




export const addUser = (user) => {
    return async (dispatch, getState) => {

        const users = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/`, user)

        dispatch({
            type: 'ADD_USER',
            payload: users
        })
    }
}

export const loggedinUser = () => {
    return (dispatch, getState) => {
        dispatch({
            type: 'LOG_IN',
            payload: false,
        })
    }
}




export const currentUser = (id) => {
    return async (dispatch, getState) => {
        const user = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${id}`)

        dispatch({
            type: 'CURRENT_USER',
            payload: user,
        })

    }
}