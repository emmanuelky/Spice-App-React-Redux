import { initialState } from '../store'

export const cryptoReducer = (state = initialState.crypto, action) => {
    switch (action.type) {
        case "FETCH_CRYPTO_MARKET":
            return {
                ...state,
                all_crypto_market: action.payload,
            }
        case "SINGLE_CRYPTO_DETAIL":
            return {
                ...state,
                single_crypto_detail: action.payload,
            }

        default:
            return state
    }
}