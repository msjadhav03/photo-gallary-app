const express = require('express');
const mediaController = require('../controller/media.controller');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage(); // Store images in memory as buffers
const upload = multer({ storage });

router.get('/fetch-media', mediaController.fetchMedia)
router.post('/upload-media', upload.single('image'), mediaController.addMedia)


module.exports = router