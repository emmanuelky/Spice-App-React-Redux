import { initialState } from '../store'



export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload,
            }

        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state

    }
}