const loginRouter = require("express").Router();



loginRouter.get("/555",(req,res)=>{

    console.log("estou na rota1")

    res.send("estou na rota1");


});

loginRouter.get("/000",(req,res)=>{

    res.send("estou na rota2r");
    console.log("estou na rota2")

});


module.exports = loginRouter;