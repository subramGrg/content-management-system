// const express = require("express");
// const app = express();
//
// app.get("/", (req, res) => (res.send("hello world")));
//
// app.listen(2000, () => (
//     console.log("Listening on port 3000")
// ));

const express = require("express");

const PORT = process.env.PORT || 3000;
// create app
const app = express();
// static file location
// app.use(express.static(`${__dirname}/dist`));
app.get("/", (req, res) => (res.send(PORT)));

app.listen(PORT, () => {
    console.log(`server is up in ${PORT}`);
});
