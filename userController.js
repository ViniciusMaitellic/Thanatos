const userRouter = require("express").Router();
const db = require('../database/db');

let user = require('./user');



userRouter.get("/login", (req, res) => {

    console.log("estou na rota1")

    res.send("estou na rota1");

});

userRouter.get("/insert", (req, res) => {


 /*
    db.collection('sampleData').doc('ok').set('quoteData').then(() =>{
        console.log("deu certo");
    })
*/

let documentRef = db.collection('test').doc();

 documentRef.create({foo: 'david'}).then(
    console.log("ok")
 ).catch( 
   console.log("falha")
 );


 /*
var myDoc ='test';

    db.collection('test').doc(myDoc).set('mangalho').then(function (sucsses) {
        console.log('mangalhos Cadastrados');
    }).catch(function (error) {
        window.alert('Falha ao Cadastrar mangalhos contate o suporte ');
        console.log(error.code)
    });

    res.send("estou na rota2r");
    console.log("estou na rota2")

    */

});




module.exports = userRouter;