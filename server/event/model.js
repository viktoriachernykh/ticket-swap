const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../user/model");

const Event = db.define("event", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
    // unique: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  picture: {
    type: Sequelize.STRING
    // allowNull: false
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

Event.belongsTo(User);
User.hasMany(Event);

module.exports = Event;
