class ponto {

    constructor(Entrada, Saida_intervalo, Entrada_intervalo, Saida, Justificativa) {

        this.entrada = Entrada;
        this.saida_intervalo = Saida_intervalo;
        this.entrada_intervalo = Entrada_intervalo;
        this.saida = Saida;
        this.justificativa = Justificativa;
    }

    getPonto() {
        return `
          Entrada: ${this.entrada}
          Saida_intervalo: ${this.saida_intervalo}
          Entrada_intervalo: ${this.entrada_intervalo}
          Saida: ${this.saida}
          Justificativa: ${this.justificativa}
        `;
    }

    setPonto(Entrada, Saida_intervalo, Entrada_intervalo, Saida, Justificativa) {
        this.entrada = Entrada;
        this.saida_intervalo = Saida_intervalo;
        this.entrada_intervalo = Entrada_intervalo;
        this.saida = Saida;
        this.justificativa = Justificativa;
    }

}


/*

service cloud.firestore {


    match /databases/{database}/documents {
    
    
      match /{document=**} {
      
      allow read, write: if request.auth.uid =='HDPs36reOmNS049m0bfqWnR6wo93';
      //David//
                      
      }
   }
    
    
    match /databases/{user}/documents {
    
    
      match /{document=**} {
      
      allow read, write: if request.auth.uid =='YKQI3vnz7vRqEhsUs9CY0nkR48z2';
      //Vinicius//
                      
      }
          
    }
    
  }

  */