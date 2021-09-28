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