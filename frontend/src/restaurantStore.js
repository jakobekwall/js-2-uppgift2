import {
    store
} from "../iceCreamStore"

const iceCreamReducer = (state = store, action) => {

    switch (action.type) {
        case "BUY_ICECREAM":
            console.log(action.order);

            return {
                ...state,
                [action.order]: state[action.order] - action.payload

            }

            case "ADD_ICECREAM":
                console.log(action);

                return Object.assign({}, state, {
                    [action.order]: state[action.order] + action.payload
                })
            default:
                return state;
    }
}

export default iceCreamReducer;