const initialState = {
    cTemp: 0.0,
    fTemp: 0.0
}

export default function tempReducer(state = initialState, action) {
    console.log("Reducer invoked: ", action)
    switch(action.type) {
        case 'UPDATE_FARENHEIT': {
            return {
                ...state,
                fTemp: action.payload,
                cTemp: ((action.payload-32)*(5/9)).toFixed(2)
            }
        }

        case 'UPDATE_CELSIUS': {
            return {
                ...state,
                cTemp: action.payload,
                fTemp: (action.payload * (9/5) + 32).toFixed(2)
            }
        }

        default:
            return state;
    }

}