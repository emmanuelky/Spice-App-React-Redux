import { initialState } from '../store'

export const movieReducer = (state = initialState.movies, action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            return {
                ...state,
                all_movies: action.payload,
            }

        case "GET_MOVIE_DETAILS":
            return {
                ...state,
                movie_details: action.payload,
            }
        case "GET_MOVIE_CATEGORY":
            return {
                ...state,
                movie_category: action.payload,
            }
        case "LOADING":
            return {
                ...state,
                loading: action.payload,
            }
        default:
            return state
    }
}