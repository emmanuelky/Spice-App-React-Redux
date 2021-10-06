import { initialState } from '../store'

export const musicReducer = (state = initialState.music, action) => {
    switch (action.type) {
        case "FETCH_MUSIC_LIST":
            return {
                ...state,
                music_lists: action.payload,
            }


        default:
            return state
    }
}