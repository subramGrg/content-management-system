"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require("redux");

var _bookReducer = require("./bookReducer");

var _bookReducer2 = _interopRequireDefault(_bookReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    books: _bookReducer2.default
});

exports.default = rootReducer;