export const bookTable = (booking) => ({
    type: "BOOK_TABLE",
    // login: payload.login,
    // restaurants: payload.restaurant,
    // date: payload.date,
    // persons: payload.person,
    payload: booking

})


export const login = (payload) => ({
    type: "LOGIN",
    account: payload.account,
    password: payload.password
})


export const incrementGuests = () => {
    return {
        type: "INCREMENT_GUESTS",
    }
}

export const decrementGuests = () => {
    return {
        type: "DECREMENT_GUESTS"
    }
}