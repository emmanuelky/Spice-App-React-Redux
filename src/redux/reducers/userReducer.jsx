import { initialState } from '../store'



export const usersReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload.reverse(),
            }

        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        case 'LOG_IN':
            return {
                ...state,
                loggedin: action.payload,
            }


        case 'GET_CURRENT_USER':
            return {
                ...state,
                getcurrentuser: action.payload,
            }


        case "LOADING":
            return {
                ...state,
                loading: action.payload,
            }

        case "ADD_FOLLOWERS":
            return {
                ...state,
                following: [...state.following, action.payload],
            }


        case "REMOVE_FROM_FOLLOWING_LIST":
            return {
                ...state,
                following: [...state.following.filter(user => user.id !== action.payload)],
            }

        case "ADD_UNFOLLOWING_USER_BACK_TO_USERS":
            return {
                ...state,
                users: [...state.users, action.payload],
            }

        default:
            return state

    }
}