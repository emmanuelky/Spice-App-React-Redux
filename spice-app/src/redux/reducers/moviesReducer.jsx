import { initialState } from '../store'

export const movieReducer = (state = initialState.movies, action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            return {
                ...state,
                movies: action.payload,
            }
        default:
            return state
    }
}