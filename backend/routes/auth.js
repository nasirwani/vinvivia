const mongoose= require('mongoose')
const User = mongoose.model("User");
const express = require('express')
const jwt= require('jsonwebtoken');
const bcrypt= require('bcrypt');
const{jwtSecret}= require('./../keys');
const requireLogin = require('../middleware/auth');
const router=express.Router()

router.post('/register', async (req, res) => {
    const {name, email,password} = req.body;
    if(!email ||!name || !password) {
        return res.status(400).json({error: 'please fill all fields'});
    }
    try {
        const user = await User.findOne({email: email});
        if(user) {
            return res.status(400).json({error: 'user already exists'});
        }
        const Hashpassword=await bcrypt.hash(password,12)
        const newUser = new User({name, email, password:Hashpassword});
       
        await newUser.save();
        return res.status(200).json(newUser);
    }
    catch(err) {
        return res.status(400).json({error: err.message});
    }
})

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(422).json({ error: "please fill all fields" });
      }
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(422).json({ error: "invalid email or password" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        // return res.json(422,{msg:'invalid credentials'});}
        return res.status(422).json({ error: "invalid credentials" });
      }
      const token = jwt.sign(
        {
          _id: user._id,
        },
        jwtSecret
      );
      // res.json(200,token);
      res.status(200).json({ message: "login sucessfull", token: token });
    } catch (error) {
      console.log(error);
    }
  });
  router.get('/test',requireLogin,(req,res)=>{
    res.status(200).json({msg:'success'});
  })
module.exports = router