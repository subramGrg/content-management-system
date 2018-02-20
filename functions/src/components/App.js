"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Header = require("./Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Body = require("./Body.jsx");

var _Body2 = _interopRequireDefault(_Body);

var _connectedForm = require("../containers/connectedForm");

var _connectedForm2 = _interopRequireDefault(_connectedForm);

var _general = require("../styles/general.scss");

var _general2 = _interopRequireDefault(_general);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Body2.default, null)
    );
};

exports.default = App;