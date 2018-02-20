"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addBook = addBook;
function addBook(_ref) {
    var name = _ref.name,
        author = _ref.author;

    return {
        type: "ADD_BOOK",
        book: {
            name: name,
            author: author
        }
    };
}