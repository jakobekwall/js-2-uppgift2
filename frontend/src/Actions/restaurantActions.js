export const bookTable = (bookTableType, amount) => (

    {
        type: "BOOK_TABLE",
        order: bookTableType,
        payload: amount

    })