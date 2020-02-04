const router = require('express').Router();
const burger = require(`../models/burger`);

router.get('/', (req,res)=> {
    res.send('homepage');
});

module.exports = router;