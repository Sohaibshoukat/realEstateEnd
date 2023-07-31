const express = require("express");
const router = express.Router();
const multer = require("multer");
const Developers = require("../Model/DeveloperSchema");


router.get("/FetchAlldeveloper", async (req, res) => {
  try {
    const developer = await Developers.find()
    res.json(developer)
  } catch (error) {
    console.error(error)
    res.status(500).send('network error occured')
  }
})


router.post("/addDeveloper", async (req, res) => {
    try {
      const developer = new Developers(req.body);

      const savedDeveloper = await developer.save();

      res.json(savedDeveloper)

    } catch (error) {
      console.error(error)
      res.status(500).send('error occured')
    }
  })

router.delete("/deletedeveloper/:id", async (req, res) => {
  try {

    let developer = await Developers.findById(req.params.id);
    if (!developer) {
      return res.status(404).send("Not Found")
    }

    developer = await Developers.findByIdAndDelete(req.params.id)
    res.json("Successfull node deleted")

  } catch (error) {
    console.error(error)
    res.status(500).send('error occured')
  }

})

//Get All notes of the user
router.put("/UpdateDeveloper/:id", async (req, res) => {
  try {
    const developer = req.body;

    let dev = await Developers.findById(req.params.id);
    if (!dev) {
      return res.status(404).send("Not Found");
    }

    // Exclude the _id field from the update operation
    delete developer._id;

    // Update the villa document
    dev = await Developers.findByIdAndUpdate(req.params.id, developer, { new: true });
    res.json(dev);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred");
  }
});


module.exports = router