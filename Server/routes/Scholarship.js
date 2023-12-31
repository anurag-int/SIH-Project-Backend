const express = require("express");
const router = express.Router();


const { addOrUpdateScholarship, getAllScholarships } = require("../controllers/Scholarship");
const { auth, isAdmin } = require("../middlewares/auth");

// for Admin Only
router.post("/addOrUpdateScholarship",  addOrUpdateScholarship);//auth, isAdmin,


//for all role
router.get("/getAllScholarships", getAllScholarships);

module.exports = router;