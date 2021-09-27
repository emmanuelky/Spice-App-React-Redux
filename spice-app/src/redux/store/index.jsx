import { createStore, applyMiddleware, combineReducers } from 'redux'


const initialState = {
    feeds: {
        posts: [],
    },
    user: {
        profile: [],
        posts: [],
        likes: [],
        followers: [],
    }
}




const store = createStore(combineReducers, initialState, applyMiddleware(thunk))