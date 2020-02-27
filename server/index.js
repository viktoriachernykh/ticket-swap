const express = require("express");
const cors = require("cors");
// const Sse = require("json-sse"); // for stream
// const Channel = require("./channel/model"); // for stream
// const Message = require("./message/model"); // for stream
// const messageFactory = require("./message/router"); // for stream
// const channelFactory = require("./channel/router"); // for stream

const app = express();
const port = process.env.PORT || 4000;

const userRouter = require("./user/router");
const eventRouter = require("./event/router");
const ticketRouter = require("./ticket/router");
const commentRouter = require("./comment/router");
const authRouter = require("./authentication/router");

function onListen() {
  console.log(`Listening on port ${port}`);
}

const corsMiddleware = cors();
app.use(corsMiddleware);

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

// STREAM
// const stream = new Sse();
// app.get("/stream", async (req, res, next) => {
//   try {
//     const tickets = await Ticket.findAll({ include: [Risk] });
//     const action = {
//       type: "ALL_RATINGS",
//       tickets
//     };
//     const json = JSON.stringify(action);
//     stream.updateInit(json);
//     stream.init(req, res);
//   } catch (error) {
//     next(error);
//   }
// });

// const messageRouter = messageFactory(stream);
// app.use(messageRouter);

// const channelRouter = channelFactory(stream);
// app.use(channelRouter);

app.use(userRouter, eventRouter, ticketRouter, commentRouter, authRouter);

app.get("/", (req, res) => res.send("Hello"));

app.listen(port, onListen);
