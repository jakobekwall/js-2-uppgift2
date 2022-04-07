export const bookTable = (booking) => ({
    type: "BOOK_TABLE",
    payload: booking

})

export const login = (username, pswrd) => ({
    type: "LOGIN",
    account: username,
    password: pswrd
})