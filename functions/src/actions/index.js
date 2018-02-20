"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bookActions = require("./bookActions");

Object.keys(_bookActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bookActions[key];
    }
  });
});