import { initialState } from '../store/'



export const postsReducer = (state = initialState.posts, action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                posts: action.payload,
            }

        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.payload],
            }

        case 'ADD_LIKES':
            return {
                ...state,
                likes: [...state.likes, action.payload]
            }

        default:
            return state

    }
}