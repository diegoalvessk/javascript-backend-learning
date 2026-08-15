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

        if(valor > this.saldo){
            console.log("Saldo insuficiente");
            return;
        }
        
        this.saldo = this.saldo - valor;
        console.log(`Saldo atual: ${this.saldo}`);
    },

    consultarSaldo: function(){
        console.log(`Saldo atual: ${this.saldo}`);
    } 
}

contaBancaria.consultarSaldo();
contaBancaria.depositar(500);
contaBancaria.sacar(200);
contaBancaria.sacar(2000);
contaBancaria.depositar(-100);
contaBancaria.sacar(0);
contaBancaria.consultarSaldo();