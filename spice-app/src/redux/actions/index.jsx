import axios from 'axios'
require('dotenv').config()

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
        const loggedInCurrentUser = currentUser.data
        dispatch({
            type: 'GET_CURRENT_USER',
            payload: loggedInCurrentUser,
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


export const removeLikes = (likes) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'REMOVE_LIKES',
            payload: likes
        })
    }
}


const POPULAR_MOVIE_BASE_URL = 'https://api.themoviedb.org/3' + '/discover/movie?sort_by=popularity.desc&' + process.env.REACT_APP_MOVIE_API_KEY
const Search_URL = 'https://api.themoviedb.org/3/search/movie?' + process.env.REACT_APP_MOVIE_API_KEY + '&query='



// console.log()

export const fetchMovies = (query) => {
    return async (dispatch, getState) => {
        const movies = await axios.get(query ? Search_URL + query : POPULAR_MOVIE_BASE_URL)
        const allMovies = movies.data.results
        console.log(allMovies)
        dispatch({
            type: 'FETCH_MOVIES',
            payload: allMovies,
        })
    }
}

// Movie Detail
const movie_api = process.env.REACT_APP_MOVIE_API_KEY
const movieDetail_URL = 'https://api.themoviedb.org/3/movie/'




export const getMovieDetails = (id) => {
    return async (dispatch, getState) => {
        const movieDetail = await axios.get(movieDetail_URL + id + '?' + process.env.REACT_APP_MOVIE_API_KEY)
        const movieCasts = await axios.get(movieDetail_URL + id + '/credits?' + process.env.REACT_APP_MOVIE_API_KEY)

        axios.all([movieDetail, movieCasts]).then(axios.spread((...responses) => {
            // console.log(responses)

            dispatch({
                type: 'GET_MOVIE_DETAILS',
                payload: responses
            })
        })).catch(errors => {

        })


    }
}




