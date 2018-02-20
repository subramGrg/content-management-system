const express = require("express");
const history = require("connect-history-api-fallback");
const react = require("react");
const renderToString = require("react-dom/server");

const PORT = process.env.PORT || 3000;
// create app
const app = express();
// static file location
app.use(history()); // this gets executed first
app.get("**", (res, req) => {
    const html = renderToString("./src/components/App.jsx");
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`server is up in ${PORT}`);
});
