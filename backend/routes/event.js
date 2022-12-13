
const mongoose= require('mongoose');
const express= require('express');
const Events= mongoose.model('Event');
const router=express.Router();
const requireLogin= require('./../middleware/auth')

router.get('/allevents',requireLogin, async (req, res)=>{
    try{
        let events= await Events.find({}).populate('postedBy','_id name')
        res.status(200).json(events)
    }
    catch(e){
        res.status(500).json({
            error: e.message
        })
    }

})
router.post("/createevent", requireLogin, async (req, res) => {
    try{
        const {eventname,description,image ,eventstatus} = req.body;
        console.log(eventstatus)
        if (!eventname || !description || !image) {
          return res.status(400).json({ error: "please fill all required fields" });
        }
        const posts = new Events({ eventname, description, image,postedBy:req.user,...req.body})
        ;
        req.user.password=undefined
   
        await posts.save();
        return res.status(200).json(posts);
      
    }
     catch(err){
        return res.status(400).json({ error: err });}
  });
router.get('/myevents',requireLogin,async(req,res)=>{
    const event = await Events.find({postedBy:req.user._id}).populate('postedBy','_id name');
    res.status(200).json(event);

})
  module.exports =router