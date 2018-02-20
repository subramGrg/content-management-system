"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _store = require("./store");

var _store2 = _interopRequireDefault(_store);

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _App = require("./components/App.jsx");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(_App2.default, null)
    )
), document.querySelector("#app"));