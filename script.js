class Estacionamento {
    constructor(valor) {
        this.valor = valor;
       
      }

    calcularTempo() {
        if (this.valor < 1.0) {
          return { mensagem: "Valor insuficiente", troco: 0, tempo: 0 };
        }

         let tempo = 0;
        let troco = 0;

        if (this.valor >= 1.0 && this.valor < 2.0) {
            tempo = 30;
          troco = this.valor - 1.00;
        } else if (this.valor >= 2.0 && this.valor < 3.0) {
        tempo = 60;
          troco = this.valor - 2.00;
        } else if (this.valor >= 3.0) {
             tempo = 120;
          troco = this.valor - 3.00;
        }
        
  

 return { mensagem: `Você tem ${tempo} minutos`, troco: troco.toFixed(2), tempo };
 
}
}


document.getElementById("calcular").addEventListener("click", () => {
    const valorInserido = parseFloat(document.getElementById("inserir-valor").value);
    const estacionamento = new Estacionamento(valorInserido);
    const resultado = estacionamento.calcularTempo();

    const mensagem = resultado.mensagem + (resultado.troco > 0 ? `. Troco: R$${resultado.troco}` : "");
    document.getElementById("resultado").innerText = mensagem;
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    });
});
