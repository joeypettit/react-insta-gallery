const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    console.log('galleryID:', galleryId);
    
    const isLiked = (req.body.isLiked === 'true'); // true or false, current user "likes" the photo
                                        // req.body.isLiked is a string, must conver to boolean
    console.log('isLiked is:', isLiked);
    // set query text to add or subtract from total likes depending on if user likes or unlikes
    const queryText = isLiked ? `UPDATE "gallery" SET "likes"=("likes"+1) WHERE "id" = $1;`:
                                `UPDATE "gallery" SET "likes"=("likes"-1) WHERE "id" = $1;`;
                                

    // pool request
    pool.query(queryText, [galleryId])
    .then(() => {
        console.log('Like or Unlike sucessful');
        res.sendStatus(200);
    }).catch((error) => console.log('Error with PUT (likes)', error));
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // assign query text
    const queryText = `SELECT * FROM "gallery";`

    // pool request  and query response
    pool.query(queryText).then((response) => {
        console.log('SELECT * COMPLETE');
        res.send(response.rows);
    }).catch((error)=> {
        console.log('Error with SELECT *', error);
        res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;