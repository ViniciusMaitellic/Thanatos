firebase.initializeApp({
  apiKey: "AIzaSyCOQcG5zVbMYaoG_LoAX_0NoX5-lUGlep4",
  authDomain: "cerberus-fractalia.firebaseapp.com",
  databaseURL: "https://cerberus-fractalia.firebaseio.com",
  projectId: "cerberus-fractalia",
  storageBucket: "cerberus-fractalia.appspot.com",
  messagingSenderId: "863328238295",
  appId: "1:863328238295:web:a03c978ffc4c52eb1b8e92",
  measurementId: "G-QCRG60VQPF"

});

function createUser(name, email, pin, pin2, pw, registration) {
  u = new user();
  u.setUser(name, email, pin, pin2, pw, registration);
  return u;
}//ok

function createPonto(entrada, saida_intervalo, entrada_intervalo, saida, justificativa) {
  p = new ponto();
  p.setPonto(entrada, saida_intervalo, entrada_intervalo, saida, justificativa);
  return p;
}//ok

db.collection("user").doc(u.email).collection("ponto").doc(actual_date).set({ entrada: actual_date }).then(function (sucsses) {
  window.alert("Dados Cadastrados");
}).catch(function (error) {
  console.log(error.code)
  window.alert("Falha ao Cadastrar dados contate o suporte 2");
});


function createUserOnDB (u,actual_date){
  var db = firebase.firestore();

      firebase.auth().createUserWithEmailAndPassword(u.email, u.pin).then(function (sucsses) {

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
}

function frontCreatePonto() {

  let unix_timestamp_date = new Date();
  let actual_date = moment(unix_timestamp_date).format('DD-MM-YYYY')

  var entrada = document.getElementById('entrada').value;
  var saida_intervalo = document.getElementById('saida_intervalo').value;
  var entrada_intervalo = document.getElementById('entrada_intervalo').value;
  var saida = document.getElementById('saida').value;

  var p = createPonto(entrada, saida_intervalo,entrada_intervalo,saida);

}

function frontCreateUser() {

  let unix_timestamp_date = new Date();
  let actual_date = moment(unix_timestamp_date).format('DD-MM-YYYY')
  var name = document.getElementById('nome').value;
  var matricula = document.getElementById('matricula').value;
  var email = document.getElementById('email').value;
  var pin = document.getElementById('pin').value;
  var pin2 = document.getElementById('pin2').value;
  var pw = document.getElementById('pw').value;
  var u = createUser(name.toUpperCase(), email, pin, pin2, pw, matricula);


  switch (name, matricula, pin, pin2, pw) {
    case pin != pin2:
      window.alert("As senhas pin devem ser iguais ");
      break;
    case pin === null || pin2 === null:
      window.alert("As senhas pin não devem ser nulas ");
      break;
    case name === null || name < 5:
      window.alert("O nome completo não pode ser nulo, ou menor que 5 caracteres!");
      break;
    case registration === null || registration < 5:
      window.alert("A matricula não pode ser nula, ou menor que 8 caracteres!");
      break;
    case pw === null || pw < 8:
      window.alert("A senha de Rede não pode ser nula, ou menor que 8 caracteres!");
      break;
      createondb(u,actual_date,db);
  }



  //if (pin === pin2 || pin && pin2 != null) {

    //if (name > 5) {

      //if (registration > 8) {

  
     /* } else {
        window.alert("A matricula não pode ser nula, ou menor que 8 caracteres!");

      }
    } else {
      window.alert("O nome completo não pode ser nulo, ou menor que 5 caracteres!");
    }
  } else {
    window.alert("Senhas não conferem, ou não podem ser nulas");
  }
  */




}

function frontRetrieve() {

  var email = document.getElementById('email').value;

  var auth = firebase.auth();



  auth.sendPasswordResetEmail(email).then(function () {
    window.alert("E-mail para redefinição de PIN enviado1");

  }).catch(function (error) {
    // An error happened.
  });

}

function frontLogin() {

  var email = document.getElementById('email').value;
  var pw = document.getElementById('pw').value;

  firebase.auth().signInWithEmailAndPassword(email, pw).then(
    window.alert(email + " Logado com sucesso"),
    window.location.href = "./upCad.html"

  )
}

/*
rules_version = '2';


service cloud.firestore {
  match /databases/{user}/email {
    match /{email=**} {

      allow read, write: if email != null && email==email;

    }
  }
}





user{//col{
  email{//doc passado via backend
    nome;//par
    matricula;//par
    pw;//par
    ponto{//col  
      date{//doc passado via backend
        entrada:timstemp;//par
        saida_intervalo:timstemp;
        entrada_intervalo:timstemp//par
        saida:timstemp//par
        justificativa:String//par
        location:Geolocation//par
      }   
    } 
  }
}

*/



