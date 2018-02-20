"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require("material-ui/styles/MuiThemeProvider");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _TextField = require("material-ui/TextField");

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require("material-ui/RaisedButton");

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Form = require("../styles/Form.scss");

var _Form2 = _interopRequireDefault(_Form);

var _reactCssModules = require("react-css-modules");

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.submitForm = _this.submitForm.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        return _this;
    }

    _createClass(Form, [{
        key: "submitForm",
        value: function submitForm(e) {
            var _state = this.state,
                name = _state.name,
                author = _state.author;


            this.props.add({ name: name, author: author });
            e.preventDefault();
        }
    }, {
        key: "handleBlur",
        value: function handleBlur(e) {
            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;


            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _MuiThemeProvider2.default,
                null,
                _react2.default.createElement(
                    "div",
                    { styleName: "new-user-forms" },
                    _react2.default.createElement(
                        "form",
                        {
                            method: "POST",
                            styleName: "new-user",
                            onSubmit: this.submitForm
                        },
                        _react2.default.createElement(
                            "h3",
                            null,
                            "Details of book:"
                        ),
                        _react2.default.createElement(
                            "fieldset",
                            null,
                            _react2.default.createElement(_TextField2.default, { name: "name",
                                hintText: "Book name",
                                onBlur: this.handleBlur,
                                fullWidth: true
                            })
                        ),
                        _react2.default.createElement(
                            "fieldset",
                            null,
                            _react2.default.createElement(_TextField2.default, { name: "author",
                                hintText: "Author name",
                                onBlur: this.handleBlur,
                                fullWidth: true
                            })
                        ),
                        _react2.default.createElement(_RaisedButton2.default, {
                            type: "submit",
                            label: "Submit"
                        })
                    )
                )
            );
        }
    }]);

    return Form;
}(_react2.default.Component);

exports.default = (0, _reactCssModules2.default)(Form, _Form2.default);