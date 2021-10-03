import { initialState } from '../store'

export const movieReducer = (state = initialState.movies, action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            return {
                ...state,
                movies: action.payload,
            }

        case "GET_MOVIE_DETAILS":
            return {
                ...state,
                movie_details: action.payload,
            }
        default:
            return state
    }
}