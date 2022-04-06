// const initialState = {
//     login: {
//         account: "jakob",
//         password: "hejabajen",
//         loggedIn: false
//     },

//     restaurants: [],
//     bookings: [],
//     amount: 0
// };

// export const restaurantsReducer = (state = initialState, action) => {
//     console.log(state.amount);
//     switch (action.type) {
//         case "BOOK_TABLE":
//             return [...state.bookings, action.payload]

//         case "INCREMENT_GUESTS":
//             return state.amount + 1

//         case "DECREMENT_GUESTS":
//             return state.amount - 1

//         case "LOGIN":
//             if (action.payload.account === state.login.account && action.payload.password === state.login.account) {
//                 return state.login.loggedIn = true;
//             }
//         default:
//             return state

//     }


// }  


const initialState = {
    bookings: []
};

export const restaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BOOK_TABLE":
            return { ...state, bookings: action.payload }
        default:
            return state

    }


}  