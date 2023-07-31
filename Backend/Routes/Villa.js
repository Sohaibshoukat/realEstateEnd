const express = require("express");
const router = express.Router();
const multer = require("multer");
const Villa_project = require("../Model/TownVilla");


router.get("/FetchAllVilla", async (req, res) => {
  try {
    const Villas = await Villa_project.find()
    res.json(Villas)
  } catch (error) {
    console.error(error)
    res.status(500).send('network error occured')
  }
})

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cd(null, file.originalname);
  }
});
const Upload = multer({
  storage: Storage,
}).single('testImage')

router.post("/addVilla", async (req, res) => {
  try {
    const townVilla = new Villa_project(req.body);

    const SavedTown = await townVilla.save();

    res.json(SavedTown)

  } catch (error) {
    console.error(error)
    res.status(500).send('error occured')
  }
})


router.delete("/deleteVilla/:id", async (req, res) => {
  try {

    let villa = await Villa_project.findById(req.params.id);
    if (!villa) {
      return res.status(404).send("Not Found")
    }

    villa = await Villa_project.findByIdAndDelete(req.params.id)
    res.json("Successfull node deleted")

  } catch (error) {
    console.error(error)
    res.status(500).send('error occured')
  }

})

//Get All notes of the user
router.put("/UpdateVilla/:id", async (req, res) => {
  try {
    const townVilla = req.body;

    let villa = await Villa_project.findById(req.params.id);
    if (!villa) {
      return res.status(404).send("Not Found");
    }

    // Exclude the _id field from the update operation
    delete townVilla._id;

    // Update the villa document
    villa = await Villa_project.findByIdAndUpdate(req.params.id, townVilla, { new: true });
    res.json(villa);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred");
  }
});


module.exports = router