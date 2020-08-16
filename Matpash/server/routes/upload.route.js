const express = require('express');
const uploadContoller = require('../controllers/upload.controller');
const router = express.Router();

router.post('/', uploadContoller.upload);

module.exports = router;