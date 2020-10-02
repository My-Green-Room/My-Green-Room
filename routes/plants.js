const express = require("express");
const router = express();
const Plant = require("../models/Plant");
// const nursery = require("../nursery.json");

// get nursery
router.get("/", (req, res) => {
  // console.log(nursery);
  // res.status(200).json(nursery);
});

// delete a plant
router.delete("/:id", (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then((plant) => {
      res.status(200).json({ message: "ok" });
    })
    .catch((error) => {
      res.json(error);
    });
});

// create a new plant
router.post("/", (req, res) => {
  const {
    nickname,
    category,
    water,
    sun,
    trim,
    description,
    imgPath,
  } = req.body;
  Plant.create({
    nickname,
    category,
    water,
    sun,
    trim,
    description,
    imgPath,
    owner: req.user._id,
  })
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((error) => {
      res.json(error);
    });
});

// update a plant
router.put("/:id", (req, res) => {
  const { title, description } = req.body;
  Project.findByIdAndUpdate(
    req.params.id,
    { nickname, category, water, sun, trim, description, imgPath },
    { new: true }
  )
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
