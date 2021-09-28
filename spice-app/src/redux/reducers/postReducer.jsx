import { initialState } from '../store/'



export const postsReducer = (state = initialState.posts, action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                posts: action.payload,
            }
        default:
            return state

    }
}