const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../user/model");
const Event = require("../event/model");

const Ticket = db.define("ticket", {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  picture: {
    type: Sequelize.STRING
  }
});

Ticket.belongsTo(User);
User.hasMany(Ticket);

Ticket.belongsTo(Event);
Event.hasMany(Ticket);

module.exports = Ticket;
