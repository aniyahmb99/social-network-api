const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").get(getAllThought).post(createThought);

// /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
