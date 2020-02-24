const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

const userRouter = require("./user/router");
const eventRouter = require("./event/router");
const ticketRouter = require("./ticket/router");

function onListen() {
  console.log(`Listening on port ${port}`);
}

const corsMiddleware = cors();
app.use(corsMiddleware);

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.use(userRouter, eventRouter, ticketRouter);

app.get("/", (req, res) => res.send("Hello"));

app.listen(port, onListen);
