const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Messcut model
const Messcut=require('../../models/Messcut')

// testing router
router.get("/test", (req, res) => {
    res.json({ msg: "Messcuts works" });
  });

  // Add messcuts
router.post('/add',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const messcut={}
    messcut.user=req.user.id;
    // const fromSplit=req.body.from.split("/")
    //  const toSplit=req.body.to.split("/")
    //  const date1 ={
    //      day:fromSplit[0],
    //      month:fromSplit[1],
    //      year:fromSplit[2]
    //  }
    //  const date2 ={
    //     day:toSplit[0],
    //     month:toSplit[1],
    //     year:toSplit[2]
    // }
    messcut.from=req.body.from;
    messcut.to=req.body.to;

    Messcut.findById(req.user.id).then(mcut=>{
            new Messcut(messcut).save().then(mcut=>res.json(mcut)).catch(err=>res.json(err))
    }).catch(err=>res.json(err))
})

// Display messcuts
router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      Messcut.find({user:req.user.id})
        .then(mcut => {
          if (!mcut) {
            res.status(404).json({ msg: "No messcut for you" });
          }
          res.json(mcut);
        })
        .catch(err => res.status(404).json(err));
    }
  );

  // Display bill

  
module.exports = router;
