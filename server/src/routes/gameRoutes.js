const express = require("express");
const router = express.Router();
const { getWords, getRank } = require("../controllers/gameController");

router.get("/words", getWords);
router.post("/rank", getRank);

module.exports = router;
