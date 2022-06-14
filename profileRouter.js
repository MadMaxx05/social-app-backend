const Router = require("express");
const router = new Router();
const authMiddleware = require("./middlewaree/authMiddleware");
const User = require("./models/User");

router.post("/fullName", authMiddleware, async (req, res) => {
  try {
    const thisUser = await User.findOne({ _id: req.user.id });
    const fullName = req.body.fullName;
    User.updateOne(
      { username: thisUser.username },
      { $set: { fullName: fullName } },
      (err) => {
        if (err)
          return res.status(200).json({ message: "Error to update fullName!" });
      }
    );
    return res.json({ message: "Name was changed successfully" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "FullName error" });
  }
});

router.post("/country", authMiddleware, async (req, res) => {
  try {
    const thisUser = await User.findOne({ _id: req.user.id });
    const country = req.body.country;
    User.updateOne(
      { username: thisUser.username },
      { $set: { country: country } },
      (err) => {
        if (err)
          return res.status(200).json({ message: "Error to update country!" });
      }
    );
    return res.json({ message: "Country was changed successfully" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Country change error" });
  }
});

router.post("/city", authMiddleware, async (req, res) => {
  try {
    const thisUser = await User.findOne({ _id: req.user.id });
    const city = req.body.city;
    User.updateOne(
      { username: thisUser.username },
      { $set: { city: city } },
      (err) => {
        if (err)
          return res.status(200).json({ message: "Error to update city!" });
      }
    );
    return res.json({ message: "City was changed successfully" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "City change error" });
  }
});

router.post("/description", authMiddleware, async (req, res) => {
  try {
    const thisUser = await User.findOne({ _id: req.user.id });
    const description = req.body.description;
    User.updateOne(
      { username: thisUser.username },
      { $set: { description: description } },
      (err) => {
        if (err)
          return res
            .status(200)
            .json({ message: "Error to update description!" });
      }
    );
    return res.json({ message: "Description was changed successfully" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Description error" });
  }
});

router.post("/contact", authMiddleware, async (req, res) => {
  try {
    const thisUser = await User.findOne({ _id: req.user.id });
    const contact = req.body.contact;
    User.updateOne(
      { username: thisUser.username },
      { $set: { contact: contact } },
      (err) => {
        if (err)
          return res.status(200).json({ message: "Error to update contact!" });
      }
    );
    return res.json({ message: "Contact was changed successfully" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "contact error" });
  }
});

router.post("/interests", authMiddleware, async (req, res) => {
  try {
    const thisUser = await User.findOne({ _id: req.user.id });
    const interests = req.body.interests;
    User.updateOne(
      { username: thisUser.username },
      { $set: { interests: interests } },
      (err) => {
        if (err)
          return res
            .status(200)
            .json({ message: "Error to update interests!" });
      }
    );
    return res.json({ message: "Interests were changed successfully" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "interests error" });
  }
});

module.exports = router;
