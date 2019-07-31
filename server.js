const express = require("express");
const app = express();
const port = 5000;
const Promise = require("bluebird");

const fundebug = require("fundebug-nodejs");
fundebug.apikey = "APIKEY";
fundebug.httpTimeout = 1000;

app.use(fundebug.ExpressTimeoutHandler());

app.get("/error", () => {
    throw new Error("test");
});

app.get("/timeout", async (req, res) => {
    await Promise.delay(1500);
    res.sendStatus(200);
});

app.use(function(err, req, res, next) {
    res.status(500);
    next(err);
});

app.use(fundebug.ExpressErrorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
