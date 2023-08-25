const Image = require('../models/gallary')
module.exports = {

    async addMedia(req, res) {
        try {

            console.log(req.body)
            const newImage = new Image({
                data: req.file.buffer,
                contentType: req.file.mimetype
            });
            await newImage.save();
            res.status(201).send('Image uploaded successfully');

        } catch (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async fetchMedia(req, res) {
        try {
            console.log('Incoming fetch REQUEST')
            const mediaData = await Image.find({}) // Fetch media data from your database
            console.log(mediaData)
            return res.json(mediaData);
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async deleteMedia(req, res) {
        try {
            res.send("Success")
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async updateMedia(req, res) {
        try {
            res.send("Success")
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

}