const express = require("express");
const router = express();
const Plant = require("../models/Plant");
// const nursery = require("../nursery.json");
const { loginCheck } = require("../routes/middlewares")

// get nursery
router.get("/", (req, res) => {
  // console.log(nursery);
  // res.status(200).json(nursery);
});

// delete a plant
router.delete("/:id", loginCheck(), (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then((plant) => {
      res.status(200).json({
        message: "ok",
      });
    })
    .catch((error) => {
      res.json(error);
    });
});

// create a new plant
router.post("/", loginCheck(), (req, res) => {
  const {
    nickname,
    category,
    water,
    sun,
    soil,
    description,
    imgPath,
  } = req.body;
  Plant.create({
    nickname,
    category,
    water,
    sun,
    soil,
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
  const { nickname, water, sun, soil } = req.body;
  Plant.findByIdAndUpdate(
    req.params.id,
    {
      nickname,
      water,
      sun,
      soil,
    },
    {
      new: true,
    }
  )
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((error) => {
      res.json(error);
    });
});
// we are adding this to get the plant details
router.get("/plantDetails/:plantid", loginCheck(), (req, res) => {
  console.log("this req.params.plantid", req.params.plantid);
  Plant.findById(req.params.plantid)
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch((error) => {
      res.json(error);
    });
});
//looking for a specific user's plants and showing it in the room
router.get("/:userid",loginCheck(), (req, res) => {
  console.log("this req.params.user", req.params.userid);
  Plant.find({
    owner: req.params.userid,
  })
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
