const express = require('express');
const router= express.Router();
const MenuItem= require('./../models/MenuItem');

// Menu Item API
router.post('/', async(req, res)=>{

    try{
        const data= req.body
        const newMenuItem= new MenuItem(data);
        const response= await newMenuItem.save();
        console.log('Data Saved');
        res.status(200).json(response);

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:  'Internal server Error'});
    }


});

router.get('/', async(req, res)=>
    {
        try{
    const data = await MenuItem.find();
    console.log('Data fetched');
    res.status(200).json(data);
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    });
// For particulor Item search
    router.get('/:testType', async (req, res) => {
        try{
            const testType = req.params.testType;
            if(testType == "spicy" || testType =="sweet" || testType == "sour")
            {
                const response = await MenuItem.find({test: testType});
                console.log('Data fetched');
                res.status(200).json(response);
            }
            else{
                res.status(404).json({error: 'Invalid work type'});
                
            }
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }) 

module.exports = router;