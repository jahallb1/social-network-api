const router = require('express').Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply
} = require('../../controllers/thought-controller');

// /api/thought/<userId>
router.route('/:userId').post(addComment);

// /api/thought/<userId>/<thoughtId>
router
  .route('/:userId/:thoughttId')
  .put(addReply)
  .delete(removeComment);

// /api/thought/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReply);

module.exports = router;