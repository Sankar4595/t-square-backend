const express = require("express");
const TechBridgeModel = require("../model/TechBridge");
const router = express.Router();

// CREATE
router.post("/addTechBridge", async (req, res) => {
  try {
    const body = req.body;
    const techBridge = new TechBridgeModel(body);
    await techBridge.save();
    res.status(201).send({ message: "TechBridge created successfully", techBridge });
  } catch (error) {
    console.error("Error creating TechBridge:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// READ ALL
router.get("/getAllTechBridges", async (req, res) => {
  try {
    const techBridges = await TechBridgeModel.find().sort({ createdAt: -1 });
    res.status(200).send(techBridges);
  } catch (error) {
    console.error("Error fetching TechBridges:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// READ BY ID
router.get("/getTechBridge/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const techBridge = await TechBridgeModel.findById(id);
    if (!techBridge) return res.status(404).send({ message: "TechBridge not found" });
    res.status(200).send(techBridge);
  } catch (error) {
    console.error("Error fetching TechBridge:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// UPDATE
router.put("/updateTechBridge/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = {
      ...req.body,
      updatedAt: new Date(),
    };
    const updatedTechBridge = await TechBridgeModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!updatedTechBridge)
      return res.status(404).send({ message: "TechBridge not found" });
    res.status(200).send({ message: "Updated successfully", updatedTechBridge });
  } catch (error) {
    console.error("Error updating TechBridge:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// DELETE
router.delete("/deleteTechBridge/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await TechBridgeModel.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).send({ message: "TechBridge not found" });
    res.status(200).send({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error deleting TechBridge:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
