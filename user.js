class user {

    constructor(Name, Email, Pin, Pin2, Pw, Matricula) {

        this.name = Name;
        this.email = Email;
        this.pin = Pin;
        this.pin2 = Pin2;
        this.pw = Pw;
        this.matricula = Matricula;
      }

      getUser() {
        return `
          Name: ${this.name}
          Email: ${this.email}
          Pin: ${this.pin}
          Pin2: ${this.pin2}
          Pw: ${this.pw}
          Matricula: ${this.matricula}
        `;
     }
     
     setUser(Name, Email, Pin, Pin2, Pw, Matricula) {       
        this.name = Name;
        this.email= Email;
        this.pin = Pin;
        this.pin2 = Pin2;        
        this.pw = Pw;
        this.matricula = Matricula;      
     }
  
}