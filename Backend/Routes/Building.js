const express = require("express");
const router = express.Router();
const Building = require("../Model/Building");


router.get("/FetchAllBuilding", async (req, res) => {
    try {
        const building = await Building.find()
        res.json(building)
    } catch (error) {
        console.error(error)
        res.status(500).send('network error occured')
    }

})

router.post("/addbuilding", async (req, res) => {
    try {
        const building = new Building(req.body);

        const savebuilding = await building.save();

        res.json(savebuilding)

    } catch (error) {
        console.error(error)
        res.status(500).send('error occured')
    }

})

router.delete("/deletebuilding/:id", async (req, res) => {
    try {

        let building = await Building.findById(req.params.id);
        if(!building)
        {
          return  res.status(404).send("Not Found")
        }

        building = await Building.findByIdAndDelete(req.params.id)
        res.json("Successfull node deleted")

    } catch (error) {
        console.error(error)
        res.status(500).send('error occured')
    }

})

//Get All notes of the user
router.put("/Updatebuilding/:id", async (req, res) => {
    try {
      const building = req.body;
      
      let projectbuilding = await Building.findById(req.params.id);
      if (!projectbuilding) {
        return res.status(404).send("Not Found");
      }
      
      // Exclude the _id field from the update operation
      delete building._id;
      
      // Update the villa document
      projectbuilding = await Building.findByIdAndUpdate(req.params.id, building, { new: true });
      res.json(projectbuilding);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error occurred");
    }
  });
  

module.exports = router