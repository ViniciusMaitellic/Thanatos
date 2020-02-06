const router = require("express").Router();

router.get("/rota1",(req,res)=>{

    console.log("estou na rota1")

    res.send("estou na rota1");


});

router.get("/rota2",(req,res)=>{

    res.send("estou na rota2r");
    console.log("estou na rota2")

});


module.exports = router;