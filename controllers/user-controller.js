const { User } = require('../models');

const userController = {
  // get all users
  getAllUser(req, res) {
    User.find({})
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one User by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate('friend')
      .populate('thought')
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create User
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => {console.log('Hi'); res.json(dbUserData)})
      .catch(err => {console.log('Hi'); res.json(err)});
      console.log('Hey there');
  },

  // update user by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // delete user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
            console.log(params.id)
            res.status(404).json({ message: 'No user found with this id!' });
            
        }
        res.json(dbUserData)
      })
      .catch(err => res.status(500).json(err));
  }
};

module.exports = userController;