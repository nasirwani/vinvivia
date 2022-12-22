const mongoose = require("mongoose");
const express = require("express");
const Events = mongoose.model("Event");
const router = express.Router();
const requireLogin = require("./../middleware/auth");
const paginatedResults=require("./../middleware/pagination")

router.get("/allevents", requireLogin, async (req, res) => {
  try {
    let events = await Events.find({}).populate("postedBy", "_id name");
    res.status(200).json(events);
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
});
//final
// router.post("/createevent", requireLogin,async (req, res) => {
//     try{
//         const {eventName,eventFormat,tenantName} = req.body;
//         if (!eventName || !eventFormat || !tenantName) {
//           return res.status(400).json({ error: "please fill all required fields" });
//         }
//         const posts = new Events({ eventName, eventFormat, tenantName,postedBy:req.user,...req.body})
//         ;
//         req.user.password=undefined

//         await posts.save();
//         return res.status(200).json(posts);

//     }
//      catch(err){
//         return res.status(400).json({ error: err });}
//   });
router.post("/createevent", async (req, res) => {
  try {
    const { eventName, eventFormat, tenantName, eventLogo } = req.body;
    if (!eventName || !eventFormat || !tenantName || !eventLogo) {
      return res.status(400).json({ error: "please fill all required fields" });
    }
    const posts = new Events({
      eventName,
      eventFormat,
      tenantName,
      ...req.body,
    });
    // req.user.password=undefined

    await posts.save();
    return res
      .status(200)
      .json({ message: "event created successfully", posts });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});
// router.get('/myevents',requireLogin,async(req,res)=>{
//     const event = await Events.find({postedBy:req.user._id}).populate('postedBy','_id name');
//     res.status(200).json(event);

// })
// router.get("/myevents", async (req, res) => {
//   const event = await Events.find();
//   res.status(200).json(event);
// });

//pagination

router.get("/myevents", paginatedResults (Events), async (req, res) => {
  
 res.json(res.paginatedResults) 
  
});

// search route

// router.get("/search", async (req, res) => {
//   try {
//     let Querystrings = req.body.query;
//     Querystrings = Querystrings.split(" ");
//     let allQueries = [];
//     Querystrings.forEach((Querystring) =>
//       allQueries.push(
//         { eventName: { $regex: String(Querystring), $options: "i" } },
//       )
//     );
//     console.log(allQueries);
//     const event = await Events.find({ $or: allQueries });
//     if (!event || event.length === 0) {
//       return res.status(400).json({ error: "no event found" });
//     }
//     res.status(200).json(event);
//   } catch (error) {
//     console.log(error);
//   }
// });
router.get("/search/:key", async (req, res) => {
  let result = await Events.find({
    $or: [
      { eventName: { $regex: req.params.key } },
      { eventFormat: { $regex: req.params.key } },
      { location: { $regex: req.params.key } },
      { tenantName: { $regex: req.params.key } },
      { eventtype: { $regex: req.params.key } },
      { eventstatus: { $regex: req.params.key } },
    ],
  });
  // console.log(result);
  if (result) {
    res.status(200).json(result);
  } else {
    res.send({ error: "event not Found" });
  }
});

// router.get('/sort',async(req, res) => {
//   let sort = req.query.sort || "createdAt";
//   // console.log(req.query.sort)
//   //if sort is present split that else add default value to array
//   req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
//   // console.log(sort);

// 		let sortBy = {};
// 		if (sort[1]) {
// 			sortBy[sort[0]] = sort[1];
// 		} else {
// 			sortBy[sort[0]] = "asc";
// 		}
//     console.log(sortBy);
//    const resp=await Events.find().sort(sortBy)
//    let nbh=resp.length
//    res.status(200).json({resp,nbh});
// })

module.exports = router;
