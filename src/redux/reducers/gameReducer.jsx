import { initialState } from '../store'

export const gameReducer = (state = initialState.games, action) => {
    switch (action.type) {
        case 'SELECTED_GAME_IMAGE':
            return {
                ...state,
                selected_card_images: [...state.selected_card_images, action.payload],
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