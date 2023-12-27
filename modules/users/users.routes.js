const router =  require("express").Router();

console.log("inside user Routes");

router.get("/all", (req,res)=>{
    res.json("hello")
});

module.exports = router;