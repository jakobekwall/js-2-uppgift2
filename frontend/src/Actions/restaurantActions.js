export const bookTable = (payload) => (


    {
        type: "BOOK_TABLE",
        login: payload.login,
        restaurants: payload.restaurant,
        date: payload.date,
        persons: payload.person

    })


export const login = (payload) => ({
    type: "LOGIN",
    account: payload.account,
    password: payload.password
})