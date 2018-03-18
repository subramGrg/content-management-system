import express from "express";
import history from "connect-history-api-fallback";
import react from "react";
import ReactDOMServer from "react-dom/server";
import App from "./src/components/App.js";

const PORT = process.env.PORT || 3000;
// create app
const app = express();
// static file location
app.use(history()); // this gets executed first
app.get("**", (req, res) => {
    const html = ReactDOMServer.renderToString(<App />);
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`server is up in ${PORT}`);
});
