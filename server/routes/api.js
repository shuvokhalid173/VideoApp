const Video = require('../model/video');
const express = require('express'); 

const router = express.Router(); 

router.get('/', async (req, res, next) => {
    try{
        const videos = await Video.find();
        res.send(videos);
    } catch (err) {
        console.log(err)
    }
});

router.get('/:id', async (req, res, next) => {
    try{
        const result = await Video.findById(req.params.id);
        if (result)
            res.send(result);
        else 
            res.send('not found');    
    }catch (err) {
        res.status(404).json({message : 'not found'});
    }
});

router.post('/', async (req, res, next) => {
    console.log(req.body);
    const newVideo = new Video(req.body); 
    try {
        const result = await newVideo.save();
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
});

router.put('/:id', async (req, res, next) => {
    try{
        const result = await Video.findById(req.params.id);
        if (result) {
            const updatedResult = await Video.update({_id : req.params.id}, req.body, {runValidators : true});
            res.send(updatedResult);
        } else {
            res.status(404).json({message : 'not found'});
        }
    } catch (err) {
        res.send(err.message);
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        const result = await Video.findByIdAndDelete(req.params.id);
        res.send(result);    
    }catch (err) {
        res.status(404).json('not found (may be id is invalid)');
    }
});

module.exports = router;