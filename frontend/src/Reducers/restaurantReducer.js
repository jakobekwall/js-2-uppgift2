const initialState = {
    bookings: [],
    amount: 0,
    login: {
        account: "maja",
        password: "awesomesås",
        loggedIn: false
    }
};

export const restaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BOOK_TABLE":
            return { ...state, bookings: action.payload }

        case "LOGIN":
            if (action.account === state.login.account && action.password === state.login.password) {
                return { ...state.login, loggedIn: true }
            }
            break
        default:
            return state
    }
} 