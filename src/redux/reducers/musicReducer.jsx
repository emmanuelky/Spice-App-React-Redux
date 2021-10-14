import { initialState } from '../store'

export const musicReducer = (state = initialState.music, action) => {
    switch (action.type) {
        case "FETCH_MUSIC_LIST":
            return {
                ...state,
                music_lists: action.payload,
            }
        case "LOADING":
            return {
                ...state,
                loading: action.payload,
            }

        case "GET_CURRENT_SONG":
            return {
                ...state,
                current_song: action.payload,
            }


        case "ADD_FAVORITE_SONG":
            return {
                ...state,
                favorite_songs: [...state.favorite_songs, action.payload]
            }

        case "REMOVE_FAVORITE_SONG":
            return {
                ...state,
                favorite_songs: [...state.favorite_songs.filter(song => song.id !== action.payload)]
            }

        case "ARTIST_DETAILS":
            return {
                ...state,
                artist_details: action.payload,
            }


        default:
            return state
    }
}