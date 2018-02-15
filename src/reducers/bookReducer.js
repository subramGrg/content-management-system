export default function bookReducer(books = [], action) {
    switch (action.type) {
        case "ADD_BOOK": {
            const { book, } = action;
            return [ ...books, { ...book } ];
        }
        default:
            // nothing
    }

    return books;
};
