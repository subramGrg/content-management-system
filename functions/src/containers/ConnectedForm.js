"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _actions = require("../actions");

var _Form = require("../components/Form.jsx");

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return (0, _redux.bindActionCreators)({ add: _actions.addBook }, dispatch);
};

var connectedForm = (0, _reactRedux.connect)(null, mapDispatchToProps)(_Form2.default);

exports.default = connectedForm;