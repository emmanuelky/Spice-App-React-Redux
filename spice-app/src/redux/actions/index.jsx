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



export const getMovieCategory = (category) => {
    return async (dispatch, getState) => {

        dispatch({
            type: 'LOADING',
            payload: true,
        })
        const movieCatalog = await axios.get('https://api.themoviedb.org/3/movie/' + category + '?' + process.env.REACT_APP_MOVIE_API_KEY + '&language=en-US&page=1')

        const movieResults = movieCatalog.data.results
        console.log(movieResults)



        dispatch({
            type: 'FETCH_MOVIES',
            payload: movieResults
        })
        dispatch({
            type: 'LOADING',
            payload: false
        })
        // })).catch(errors => {

        // })


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
        const musicSearch = await axios.get(query ? `${music_BASE_URL}/search?q=${query}` : `${music_BASE_URL}/search?q=drake`)

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



export const getArtistDetails = (id) => {
    return async (dispatch, getState) => {

        dispatch({
            type: 'LOADING',
            payload: true,
        })

        const artistDetails = await axios.get(`${music_BASE_URL}/artist/${id}/top?limit=50`)

        axios.all([artistDetails]).then(axios.spread((...responses) => {
            // console.log(artistDetails)

            dispatch({
                type: 'ARTIST_DETAILS',
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






export const addFollowers = (user) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_FOLLOWERS',
            payload: user
        })
    }
}


export const addUnfollowingUserBackToUsersList = (user) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_UNFOLLOWING_USER_BACK_TO_USERS',
            payload: user
        })
    }
}


export const removeFromFollowingList = (userId) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'REMOVE_FROM_FOLLOWING_LIST',
            payload: userId
        })
    }
}


export const getSinglePostComment = (post) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SINGLE_POST_COMMENT',
            payload: post
        })
    }
}




export const postComments = (comment) => {
    return async (dispatch, getState) => {

        const newComment = await axios.post(`${process.env.REACT_APP_BASE_URL}/comments/`, comment)

        dispatch({
            type: 'POST_COMMENTS',
            payload: newComment
        })
    }
}




export const getPostId = (postId) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'GET_POST_ID',
            payload: postId
        })
    }
}




export const addCurrentSong = (song) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'GET_CURRENT_SONG',
            payload: song
        })
    }
}


export const addFavoriteSong = (song) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_FAVORITE_SONG',
            payload: song
        })
    }
}

export const removeFavoriteSong = (songId) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'REMOVE_FAVORITE_SONG',
            payload: songId
        })
    }
}




export const fetchAllCryptoMarket = () => {
    return async (dispatch, getState) => {

        const cryptoData = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc%2C%20volume_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y`)
        const crytoDataArray = cryptoData.data
        console.log(crytoDataArray)
        dispatch({
            type: 'FETCH_CRYPTO_MARKET',
            payload: crytoDataArray
        })
    }
}