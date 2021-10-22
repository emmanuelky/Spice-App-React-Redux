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
                likes: [...state.likes, action.payload],
            }

        case 'REMOVE_LIKES':
            return {
                ...state,
                likes: [...state.likes.filter(p => p.id !== action.payload)],
            }
        case "LOADING":
            return {
                ...state,
                loading: action.payload,
            }

        case "SINGLE_POST_COMMENT":
            return {
                ...state,
                single_post_comment: action.payload,
            }

        case "ADD_COMMENTS":
            return {
                ...state,
                all_comments: [...state.all_comments, action.payload],
            }

        case "POST_COMMENTS":
            return {
                ...state,
                comments: [...state.comments, action.payload],
            }

        case "GET_POST_ID":
            return {
                ...state,
                post_id: action.payload,
            }

        default:
            return state

    }
}