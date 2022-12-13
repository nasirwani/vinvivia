const express= require('express');
const mongoose= require('mongoose');
const jwt= require('jsonwebtoken');
const{jwtSecret}= require('./../keys')
const User=mongoose.model("User")
const requireLogin = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "you must login first" });
    }
    const token = authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "you must login first" });
    }
    jwt.verify(token, jwtSecret, (err, payload) => {
      if (err) {
        return res.status(401).json({ error: "you must login first" });
      }
      const { _id } = payload;
      console.log(payload)
      User.findById(_id).then((userdata) => {
        // console.log(userdata, "userdata");
        req.user = userdata;
      //   console.log(req.user.password);
        next();
      });
    });
  };
  
  module.exports = requireLogin;
  