const express = require('express');
const tableContoller = require('../controllers/table.controller');
const router = express.Router();

router.get('/get-names', tableContoller.getTablesName);
router.post('/get-cols', tableContoller.getColFromTable);

module.exports = router;