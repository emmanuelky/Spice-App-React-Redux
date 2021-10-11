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

        case "GET_SONG_MP3_LINK":
            return {
                ...state,
                current_song_mp3_link: action.payload,
            }


        default:
            return state
    }
}