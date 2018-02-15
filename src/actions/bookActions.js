export function addBook({ name, author, }) {
    return {
        type: "ADD_BOOK",
        book: {
            name,
            author,
        },
    };
}
