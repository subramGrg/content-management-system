"use strict";

var express = require("express");
var history = require("connect-history-api-fallback");
var react = require("react");
var renderToString = require("react-dom/server");

var PORT = process.env.PORT || 3000;
// create app
var app = express();
// static file location
app.use(history()); // this gets executed first
app.get("**", function (res, req) {
    var html = renderToString("./src/components/App.jsx");
    res.send(html);
});

app.listen(PORT, function () {
    console.log("server is up in " + PORT);
});