import axios from 'axios'
require('dotenv').config()

export const fetchPosts = () => {
    return async (dispatch, getState) => {


        dispatch({
            type: 'LOADING',
            payload: true
        })
        const posts = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/`)
        const postsArray = posts.data
        dispatch({
            type: 'FETCH_POSTS',
            payload: postsArray,
        })
        dispatch({
            type: 'LOADING',
            payload: false,
        })
    }
}


export const addPosts = (post) => {
    return async (dispatch, getState) => {

        dispatch({
            type: 'LOADING',
            payload: true,
        })

        const posts = await axios.post(`${process.env.REACT_APP_BASE_URL}/posts/`, post)
        // const postsArray = posts.data
        dispatch({
            type: 'ADD_POST',
            payload: posts
        })
        dispatch({
            type: 'LOADING',
            payload: false,
        })

    }
}




export const fetchUsers = () => {
    return async (dispatch, getState) => {

        dispatch({
            type: 'LOADING',
            payload: true,
        })

        const users = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`)
        const usersArray = users.data
        // console.log(usersArray)
        dispatch({
            type: 'FETCH_USERS',
            payload: usersArray,
        })
        dispatch({
            type: 'LOADING',
            payload: false
        })

    }
}




export const addUser = (user) => {
    return async (dispatch, getState) => {

        dispatch({
            type: 'LOADING',
            payload: true,
        })
        const users = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/`, user)

        dispatch({
            type: 'ADD_USER',
            payload: users
        })
        dispatch({
            type: 'LOADING',
            payload: false
        })
    }
}





export const currentUser = (newuser) => {
    return async (dispatch, getState) => {

        dispatch({
            type: 'LOADING',
            payload: true,
        })
        const user = await axios.post(`${process.env.REACT_APP_BASE_URL}/currentUser/`, newuser)

        dispatch({
            type: 'POST_CURRENT_USER',
            payload: user,
        })
        dispatch({
            type: 'LOADING',
            payload: false
        })
    }
}


export const getCurrentUser = () => {
    return async (dispatch, getState) => {

        dispatch({
            type: 'LOADING',
            payload: true,
        })

        const currentUser = await axios.get(`${process.env.REACT_APP_BASE_URL}/currentUser`)
        const loggedInCurrentUser = currentUser.data
        dispatch({
            type: 'GET_CURRENT_USER',
            payload: loggedInCurrentUser,
        })
        dispatch({
            type: 'LOADING',
            payload: false
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


const TRENDING_MOVIE_BASE_URL = 'https://api.themoviedb.org/3/' + 'trending/all/week?' + process.env.REACT_APP_MOVIE_API_KEY
const Search_URL = 'https://api.themoviedb.org/3/search/movie?' + process.env.REACT_APP_MOVIE_API_KEY + '&query='

// console.log()

export const fetchMovies = (query) => {
    return async (dispatch, getState) => {

        dispatch({
            type: 'LOADING',
            payload: true,
        })

        const movies = await axios.get(query ? Search_URL + query : TRENDING_MOVIE_BASE_URL)

        const allMovies = movies.data.results
        // console.log(allMovies)
        dispatch({
            type: 'FETCH_MOVIES',
            payload: allMovies,
        })
        dispatch({
            type: 'LOADING',
            payload: false
        })
    }
}

// Movie Detail
const movie_api = process.env.REACT_APP_MOVIE_API_KEY
const movieDetail_URL = 'https://api.themoviedb.org/3/movie/'



const upcomingMovie_URL = 'https://api.themoviedb.org/3/movie/upcoming?' + process.env.REACT_APP_MOVIE_API_KEY + '&language=en-US&page=1'
const topRatedMovie_URL = 'https://api.themoviedb.org/3/movie/top_rated?' + process.env.REACT_APP_MOVIE_API_KEY + '&language=en-US&page=1'
const nowPlayingMovie_URL = 'https://api.themoviedb.org/3/movie/now_playing?' + process.env.REACT_APP_MOVIE_API_KEY + '&language=en-US&page=1'
const popularMovie_URL = 'https://api.themoviedb.org/3/movie/popular?' + process.env.REACT_APP_MOVIE_API_KEY + '&language=en-US&page=1'

export const getMovieCategory = () => {
    return async (dispatch, getState) => {

        dispatch({
            type: 'LOADING',
            payload: true,
        })
        const upcomingMovie = await axios.get(upcomingMovie_URL)
        const topRatedMovie = await axios.get(topRatedMovie_URL)
        const nowPlayingMovie = await axios.get(nowPlayingMovie_URL)
        const popularMovie = await axios.get(popularMovie_URL)

        axios.all([upcomingMovie, topRatedMovie, nowPlayingMovie, popularMovie,]).then(axios.spread((...responses) => {


            dispatch({
                type: 'GET_MOVIE_CATEGORY',
                payload: responses
            })
            dispatch({
                type: 'LOADING',
                payload: false
            })
        })).catch(errors => {

        })


    }
}



export const getMovieDetails = (id) => {
    return async (dispatch, getState) => {

        dispatch({
            type: 'LOADING',
            payload: true,
        })
        const movieDetail = await axios.get(movieDetail_URL + id + '?' + process.env.REACT_APP_MOVIE_API_KEY)
        const movieCasts = await axios.get(movieDetail_URL + id + '/credits?' + process.env.REACT_APP_MOVIE_API_KEY)
        const similarMovie = await axios.get(movieDetail_URL + id + '/similar?' + process.env.REACT_APP_MOVIE_API_KEY)
        const movieReviews = await axios.get(movieDetail_URL + id + '/reviews?' + process.env.REACT_APP_MOVIE_API_KEY)
        const movieRecommendations = await axios.get(movieDetail_URL + id + '/recommendations?' + process.env.REACT_APP_MOVIE_API_KEY)




        axios.all([movieDetail, movieCasts, similarMovie, movieReviews, movieRecommendations]).then(axios.spread((...responses) => {
            // console.log(responses)

            dispatch({
                type: 'GET_MOVIE_DETAILS',
                payload: responses
            })
            dispatch({
                type: 'LOADING',
                payload: false
            })
        })).catch(errors => {

        })


    }
}

const music_BASE_URL = 'https://striveschool-api.herokuapp.com/api/deezer'

export const getMusicSearch = (query) => {
    return async (dispatch, getState) => {

        dispatch({
            type: 'LOADING',
            payload: true,
        })
        const musicSearch = await axios.get(query ? `${music_BASE_URL}/search?q=${query}` : `${music_BASE_URL}/search?q=eminem`)

        axios.all([musicSearch]).then(axios.spread((...responses) => {
            // console.log(musicSearch)

            dispatch({
                type: 'FETCH_MUSIC_LIST',
                payload: responses
            })

            dispatch({
                type: 'LOADING',
                payload: false
            })
        })).catch(errors => {

        })


    }
}






