const Tracking = require('../models/tracking'); 

// add a request to the track database
const track = async (req, code, res) =>{
    const newTracking = new Tracking({
        'request':JSON.stringify({...req.body,...req.headers}),
        'code':code, 
        'response': JSON.stringify(res)});
    // console.log(newTracking);
    await newTracking.save();
};

module.exports = track;
