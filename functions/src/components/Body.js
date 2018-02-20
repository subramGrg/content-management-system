"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Form = require("./Form.jsx");

var _Form2 = _interopRequireDefault(_Form);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body() {
    return _react2.default.createElement(
        "main",
        null,
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/" }),
            _react2.default.createElement(_reactRouterDom.Route, { path: "/sign-up", component: _Form2.default })
        )
    );
};

exports.default = Body;