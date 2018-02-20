"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require("redux");

var _reducers = require("../reducers");

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxLogger = require("redux-logger");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    books: []
};

var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxLogger2.default));

exports.default = store;