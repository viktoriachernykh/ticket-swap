const { Router } = require("express");
const Event = require("./model");
const { auth } = require("../authentication/authMiddleware");
const router = new Router();

router.post("/event", auth, async function(req, res, next) {
  try {
    const event = await Event.create(req.body);
    res.send(event);
  } catch (error) {
    next(error);
  }
});

router.get("/event", async (req, res, next) => {
  try {
    const events = await Event.findAll();
    res.send(events);
  } catch (error) {
    next(error);
  }
});

router.get("/event/:id", async (req, res, next) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findByPk(eventId);
    if (!event) {
      res
        .status(404)
        .send({ message: "Event with this ID doesn't exist" })
        .end();
    }
    res.send(event);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
