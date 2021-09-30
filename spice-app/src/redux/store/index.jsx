import { createStore, applyMiddleware, combineReducers } from 'redux'
import { postsReducer } from '../reducers/postReducer'
import { usersReducer } from '../reducers/userReducer'
import thunk from 'redux-thunk'

export const initialState = {
    posts: {
        posts: [],
        likes: [],
    },
    users: {
        users: [],
        loggedin: true,
        currentUser: {},
    },
}

const allReducers = combineReducers({
    posts: postsReducer,
    users: usersReducer,
})

const store = createStore(allReducers, initialState, applyMiddleware(thunk))

export default store