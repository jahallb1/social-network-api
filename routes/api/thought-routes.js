const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thought/<userId>
router.route('/:id').post(addThought);

// /api/thought/<userId>/<thoughtId>
router
  .route('/:id/:thoughttId')
  .put(addReaction)
  .delete(removeThought);

// /api/thought/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;