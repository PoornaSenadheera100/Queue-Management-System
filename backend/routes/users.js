const router = require("express").Router();
let User = require("../models/User");

router.route("/add").post((req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({
        username,
        password
    })

    newUser.save().then(()=>{
        res.json("User Added.");
    }).catch((err)=>{
        console.log(err);
    })
})

// for testing
router.route("/get").get((req, res)=>{
    User.find().then((user)=>{
        res.json(user);
    }).catch((err)=>{
        console.log(err);
    })
})



module.exports = router;