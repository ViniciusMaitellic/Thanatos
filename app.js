const express = require("express");
const app = express();
const db = require("./database/db");
const bodyParser = require('body-parser');
const userController = require('./user/userController');
const loginController = require('./login/loginController');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded ({extends:false}));

app.use(bodyParser.json());




/*/pega configs do firebase

db.auth().signInWithEmailAndPassword(email, pw).then(function (sucsses) {

    window.alert("Email e senha cadastrado com sucesso");

    db.collection("user").doc(u.email).set({ u_nome: u.name, u_matricula: u.matricula, u_pw: u.pw }).then(function (sucsses) {
      window.alert("Dados Cadastrados");
    }).catch(function (error) {
      window.alert("Falha ao Cadastrar dados contate o suporte 1");
      console.log(error.code)
    });

  }).catch(function (error) {

    switch (error.code) {
      case 'auth/weak-password':
        window.alert("A senha deve conter no mínimo 6 caracteres");
        break;
      case 'auth/invalid-email':
        window.alert("O email informado é invalido");
        break;
      case 'auth/email-already-in-use':
        window.alert("O email informado ja esta em uso, para correção solicite redefinição de cadastro ao Admin");
        break;
    }
  });

/*///pega configs do firebase (fim)


app.use("/",userController);

app.use("/",loginController);

app.get("/", function (req, res) {

    res.render("login");
})

app.post("/", function (req, res) {
    
})

app.post("/index", function (req, res) {
    res.render("index");
})
app.get("/index", function (req, res) {
    res.render("index");
})

app.get("/ponto", function (req, res) {
    res.render("ponto");
})
app.post("/ponto", function (req, res) {
    res.render("ponto");
})

app.get("/pontoAdm", function (req, res) {
    res.render("pontoAdm");
})
app.post("/pontoAdm", function (req, res) {
    res.render("pontoAdm");
})


app.listen(8888, () => { console.log("NO AR!!!") })


module.exports = app;
