const { Router } = require("express");
const Ticket = require("./model");
const router = new Router();

router.post("/ticket", async (req, res, next) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.send(ticket);
  } catch (error) {
    next(error);
  }
});

router.get("/ticket", async (req, res, next) => {
  try {
    const tickets = await Ticket.findAll();
    res.send(tickets);
  } catch (error) {
    next(error);
  }
});

router.get("/ticket/:id", async (req, res, next) => {
  const ticketId = req.params.id;
  try {
    const ticket = await Ticket.findByPk(ticketId);
    if (!ticket) {
      res
        .status(404)
        .send({ message: "Ticket with this ID doesn't exist" })
        .end();
    }
    res.send(ticket);
  } catch (error) {
    next(error);
  }
});

router.patch("/ticket/:id", async (req, res, next) => {
  const ticketId = req.params.id;
  try {
    await Ticket.update(req.body, {
      where: {
        id: ticketId
      }
    });
    const updatedticket = await Ticket.findByPk(ticketId);
    if (!updatedticket) {
      res
        .status(404)
        .send({ message: "Ticket not found" })
        .end();
    }
    res.send(updatedticket);
  } catch (error) {
    next(error);
  }
});

router.delete("/ticket/:id", async (req, res, next) => {
  const ticketId = req.params.id;
  try {
    await Ticket.destroy({
      where: {
        id: ticketId
      }
    });
    res.send({ message: "Ticket deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
