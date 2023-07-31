const express = require("express");
const router = express.Router();
const PentHouse = require("../Model/PentHouse");


router.get("/FetchAllPentHouse", async (req, res) => {
    try {
        const penthouse = await PentHouse.find()
        res.json(penthouse)
    } catch (error) {
        console.error(error)
        res.status(500).send('network error occured')
    }

})

router.post("/addpenthouse", async (req, res) => {
    try {
        const penthouse = new PentHouse(req.body);

        const savedhouse = await penthouse.save();

        res.json(savedhouse)

    } catch (error) {
        console.error(error)
        res.status(500).send('error occured')
    }

})

router.delete("/deletepenthouse/:id", async (req, res) => {
    try {

        let penthouse = await PentHouse.findById(req.params.id);
        if(!penthouse)
        {
          return  res.status(404).send("Not Found")
        }

        penthouse = await PentHouse.findByIdAndDelete(req.params.id)
        res.json("Successfull node deleted")

    } catch (error) {
        console.error(error)
        res.status(500).send('error occured')
    }

})

//Get All notes of the user
router.put("/Updatepenthouse/:id", async (req, res) => {
    try {
      const penthouse = req.body;
      
      let pent = await PentHouse.findById(req.params.id);
      if (!pent) {
        return res.status(404).send("Not Found");
      }
      
      // Exclude the _id field from the update operation
      delete penthouse._id;
      
      // Update the villa document
      pent = await PentHouse.findByIdAndUpdate(req.params.id, penthouse, { new: true });
      res.json(pent);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error occurred");
    }
  });
  

module.exports = router