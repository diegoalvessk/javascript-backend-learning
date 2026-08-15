const contaBancaria = {
    titular: "Diego",
    saldo: 1000,

    depositar: function(valor){
        if(valor <= 0){
            console.log("Valor inválido");
            return;
        }

        this.saldo = this.saldo + valor;
        console.log(`Saldo atual: ${this.saldo}`);
    },

    sacar: function(valor){
         if(valor <= 0){
            console.log("Valor inválido");
            return;
        }


    }
}