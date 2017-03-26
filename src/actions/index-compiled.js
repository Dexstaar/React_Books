'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectBook = selectBook;
function selectBook(book) {

    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

//# sourceMappingURL=index-compiled.js.map