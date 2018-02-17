const express = require("express");
const history = require("connect-history-api-fallback");

const PORT = process.env.PORT || 3000;
// create app
const app = express();
// static file location
app.use(history()); // this gets executed first
app.use(express.static(`${__dirname}/dist`));

app.listen(PORT, () => {
    console.log(`server is up in ${PORT}`);
});
