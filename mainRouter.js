const Router = require('express');
const router = new Router();
const controller = require('./authController');
const authMiddleware = require('./middlewaree/authMiddleware');

const User = require('./models/User');

router.get('/users', authMiddleware, controller.getUsers);

router.get('/user/:username', authMiddleware, async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username: username });
    res.json(user);
  } catch (e) {
    console.log(e);
  }
});

router.get('/user', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    res.json(user);
  } catch (e) {
    console.log(e);
  }
});

router.get('/search', authMiddleware, async (req, res) => {
  try {
    const search = req.body.search;
    const users = await User.find({
      interests: { $regex: search, $options: 'i' }
    });
    res.json(users);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
