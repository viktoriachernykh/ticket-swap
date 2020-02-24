const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const router = new Router();

// http :4000/user name=1 email=1 password=1
router.post("/user", async (req, res, next) => {
  const { name, email, password, logo } = req.body;
  if (!name || !email || !password) {
    res
      .status(400)
      .send({
        message: "Please fill name, email and password fields"
      })
      .end();
  }
  try {
    const user = await User.create({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 10),
      logo: logo
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.get("/user", async (req, res, next) => {
  try {
    const users = await User.findAll();
    if (!users.length) {
      res
        .status(404)
        .send({ message: "No users yet" })
        .end();
    }
    res.send(users);
  } catch (error) {
    next(error);
  }
});

router.get("/user/:id", async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      res
        .status(404)
        .send({ message: "User with this ID doesn't exist" })
        .end();
    }
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.patch("/user/:id", async (req, res, next) => {
  const userId = req.params.id;
  const { name, email, password, logo } = req.body;
  try {
    const user = {
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 10),
      logo: logo
    };
    const updateUser = await User.update(user, {
      where: {
        id: userId
      }
    });
    const updatedUser = await User.findByPk(userId);
    if (!updatedUser) {
      res
        .status(404)
        .send({ message: "User not found" })
        .end();
    }
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.delete("/user/:id", async (req, res, next) => {
  const userId = req.params.id;
  try {
    await User.destroy({
      where: {
        id: userId
      }
    });
    res.send({ message: "User deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
