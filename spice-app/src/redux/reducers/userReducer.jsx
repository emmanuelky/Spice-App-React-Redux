import { initialState } from '../store'



export const usersReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload,
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
        case 'CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state

    }
}