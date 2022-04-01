import { store } from "../restaurantStore"

const restaurantReducer = (state = store, action) => {

    switch (action.type) {
        case "CHOOSE_RESTAURANT":
            console.log(action.order);

            return {
                ...state,
                [action.order]: state[action.order] - action.payload

            }

        // case "ADD_ICECREAM":
        //     console.log(action);

        //     return Object.assign({}, state, {
        //         [action.order]: state[action.order] + action.payload
        //     })
        // default:
        //     return state;
    }
}

export default restaurantReducer;