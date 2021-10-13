import { initialState } from '../store'

export const cryptoReducer = (state = initialState.crypto, action) => {
    switch (action.type) {
        case "FETCH_CRYPTO_MARKET":
            return {
                ...state,
                all_crypto_market: action.payload,
            }


        default:
            return state
    }
}