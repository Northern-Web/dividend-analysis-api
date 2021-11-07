const express = require('express');

const dividendController = require("./../controllers/dividend.controller");
const router = express.Router();

router.post("/", dividendController.create);

module.exports = router;
