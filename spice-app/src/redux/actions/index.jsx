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

// export const loggedinUser = () => {
//     return (dispatch, getState) => {
//         dispatch({
//             type: 'LOG_IN',
//             payload: false,
//         })
//     }
// }




export const currentUser = (newuser) => {
    return async (dispatch, getState) => {
        const user = await axios.post(`${process.env.REACT_APP_BASE_URL}/currentUser/`, newuser)

        dispatch({
            type: 'POST_CURRENT_USER',
            payload: user,
        })

    }
}


export const getCurrentUser = () => {
    return async (dispatch, getState) => {
        const currentUser = await axios.get(`${process.env.REACT_APP_BASE_URL}/currentUser`)

        dispatch({
            type: 'GET_CURRENT_USER',
            payload: currentUser,
        })
    }
}

export const addLikes = (likes) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_LIKES',
            payload: likes
        })
    }
}

const BASE_URL = 'https://api.themoviedb.org/3' + '/discover/movie?sort_by=popularity.desc&' + process.env.REACT_APP_MOVIE_API_KEY
const Search_URL = 'https://api.themoviedb.org/3/search/movie' + process.env.REACT_APP_MOVIE_API_KEY + '&query='



console.log()

export const fetchMovies = (query) => {
    return async (dispatch, getState) => {
        const movies = await axios.get(query ? Search_URL + query : BASE_URL)
        // console.log(movies)
        dispatch({
            type: 'FETCH_MOVIES',
            payload: movies,
        })
    }
}


const movie_api = process.env.REACT_APP_MOVIE_API_KEY
const movieDetail_URL = "https://api.themoviedb.org/3"

export const getMovieDetails = (id) => {
    return async (dispatch, getState) => {
        const movieDetail = await axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=9e2146b30687bd1feadfd70291545597')
        // console.log(movieDetail.data)
        dispatch({
            type: 'GET_MOVIE_DETAIL',
            payload: movieDetail.data,
        })
    }
}