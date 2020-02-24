const { Router } = require("express");
const Comment = require("./model");
const router = new Router();

router.post("/comment", async (req, res, next) => {
  try {
    const comment = await Comment.create(req.body);
    res.send(comment);
  } catch (error) {
    next(error);
  }
});

router.get("/comment", async (req, res, next) => {
  try {
    const comments = await Comment.findAll();
    res.send(comments);
  } catch (error) {
    next(error);
  }
});

router.get("/comment/:id", async (req, res, next) => {
  const commentId = req.params.id;
  try {
    const comment = await Comment.findByPk(commentId);
    if (!comment) {
      res
        .status(404)
        .send({ message: "Comment doesn't exist" })
        .end();
    }
    res.send(comment);
  } catch (error) {
    next(error);
  }
});

// router.patch("/comment/:id", async (req, res, next) => {
//   const commentId = req.params.id;
//   try {
//     await Comment.update(req.body, {
//       where: {
//         id: commentId
//       }
//     });
//     const updatedComment = await Comment.findByPk(commentId);
//     if (!updatedComment) {
//       res
//         .status(404)
//         .send({ message: "Comment doesn't exist" })
//         .end();
//     }
//     res.send(updatedComment);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/comment/:id", async (req, res, next) => {
//   const commentId = req.params.id;
//   try {
//     await Comment.destroy({
//       where: {
//         id: commentId
//       }
//     });
//     res.send({ message: "Comment deleted" });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
