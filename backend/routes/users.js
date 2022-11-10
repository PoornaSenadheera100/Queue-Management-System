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


router.route("/validate/:username").get(async(req, res)=>{
    let username = req.params.username;
    await User.find({"username" : `${username}`}).then((user)=>{
        res.json(user);
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get the user details", error: err.message});
    })
})

module.exports = router;