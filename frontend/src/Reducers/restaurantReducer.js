const initialState = {
    login: {
        account: "jakob",
        password: "hejhej",
        loggedIn: false
    },

    restaurants: [],
    bookings: []
};


export const restaurantsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "BOOK_TABLE":
            return [...state.bookings, action.payload]
        case "LOGIN":
            if (action.payload.account === state.login.account && action.payload.password === state.login.account) {
                return state.login.loggedIn = true;
            }
        default:
            return state
    }

}  