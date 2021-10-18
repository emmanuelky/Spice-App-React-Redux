import { initialState } from '../store'

export const gameReducer = (state = initialState.games, action) => {
    switch (action.type) {
        case 'MEMORY_GAME_SCORE':
            return {
                ...state,
                memory_game_total_score: action.payload,
            }

        case 'VISIBLE_IMAGE':
            return {
                ...state,
                visible: action.payload,
            }

        default:
            return state
    }
}