import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { postsReducer } from '../reducers/postReducer'
import { usersReducer } from '../reducers/userReducer'
import { movieReducer } from '../reducers/moviesReducer'
import { musicReducer } from '../reducers/musicReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import storage from 'redux-persist/lib/storage'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const initialState = {
    posts: {
        posts: [],
        likes: [],
        loading: false,
        single_post_comment: [],

    },
    users: {
        users: [],
        loggedin: true,
        getcurrentuser: {},
        loading: false,
        following: [],
        // unfollowing_user_list: [],
    },
    movies: {
        all_movies: [],
        movie_details: [],
        movie_category: [],
        loading: false,
    },
    music: {
        music_lists: [],
        loading: false,
    },
}



const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_ENCRYPT_KEY,
        }),
    ],
}


const allReducers = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    movies: movieReducer,
    music: musicReducer,
})

const persistAllReducers = persistReducer(
    persistConfig, allReducers
)

export const store = createStore(persistAllReducers,
    initialState,
    process.env.REACT_APP_DEVELOPMENT ? composeEnhancers(applyMiddleware(thunk)) : compose(applyMiddleware(thunk)))

export const persistor = persistStore(store)