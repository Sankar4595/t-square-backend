const express = require("express");
const VisaModalModel = require("../model/visaModal");
const router = express.Router();

// CREATE
router.post("/addVisa", async (req, res) => {
  try {
    const visaModal = new VisaModalModel(req.body);
    await visaModal.save();
    res.status(201).send({ message: "Visa modal created", visaModal });
  } catch (error) {
    console.error("Error creating visa modal:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// READ ALL
router.get("/allVisas", async (req, res) => {
  try {
    const visas = await VisaModalModel.find();
    res.status(200).send(visas);
  } catch (error) {
    console.error("Error fetching visa modals:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// READ BY ID
router.get("/visa/:id", async (req, res) => {
  try {
    const visa = await VisaModalModel.findById(req.params.id).populate("techBridgeRef");
    if (!visa) return res.status(404).send({ message: "Visa modal not found" });
    res.status(200).send(visa);
  } catch (error) {
    console.error("Error fetching visa modal:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// UPDATE
router.put("/updateVisa/:id", async (req, res) => {
  try {
    const updatedVisa = await VisaModalModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedVisa) return res.status(404).send({ message: "Visa modal not found" });
    res.status(200).send({ message: "Visa modal updated", updatedVisa });
  } catch (error) {
    console.error("Error updating visa modal:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// DELETE
router.delete("/deleteVisa/:id", async (req, res) => {
  try {
    const deleted = await VisaModalModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send({ message: "Visa modal not found" });
    res.status(200).send({ message: "Visa modal deleted" });
  } catch (error) {
    console.error("Error deleting visa modal:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
