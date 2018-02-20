"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _reactCssModules = require("react-css-modules");

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _header = require("../styles/header.scss");

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
    return _react2.default.createElement(
        "header",
        { className: "container", styleName: "main-nav" },
        _react2.default.createElement(
            "nav",
            null,
            _react2.default.createElement(
                "ul",
                null,
                _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: "/" },
                        "Home"
                    )
                ),
                _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: "/sign-up" },
                        "Sign Up"
                    )
                )
            )
        )
    );
};

exports.default = (0, _reactCssModules2.default)(Header, _header2.default);