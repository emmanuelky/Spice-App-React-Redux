import { createStore, applyMiddleware, combineReducers } from 'redux'
import { postsReducer } from '../reducers/postReducer'
import thunk from 'redux-thunk'

export const initialState = {
    posts: [],
}

const allReducers = combineReducers({
    posts: postsReducer,
})

const store = createStore(allReducers, initialState, applyMiddleware(thunk))

export default store