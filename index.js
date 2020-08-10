var ArrayContent = []
function CalcularSalario() {
    let nome = document.getElementById('nome');
    let valorHora = document.getElementById('valorHr');
    let qtdeHrs = document.getElementById('qtdeHrs')
    let DivErro = document.getElementById('DivErro')
    let DivEquivoco = document.getElementById('DivEquivoco')


    if (nome.value.length != 0 && valorHora.value.length != 0 && qtdeHrs.value.length != 0) {
        parseFloat(ArrayContent[0] = valorHora.value * qtdeHrs.value);
        if (ArrayContent[0] <= 22874.76) {
            ArrayContent[2] = "Isento.";
            ArrayContent[1] = ArrayContent[0] - 0;
        }
        if (ArrayContent[0] > 22847.76 && ArrayContent[0] <= 33912.81) {
            ArrayContent[1] = ArrayContent[0] - 1713.58;
            ArrayContent[2] = "7,5%";
        }
        if (ArrayContent[0] > 33912.81 && ArrayContent[0] <= 45012.61) {
            ArrayContent[1] = ArrayContent[0] - 4256.57;
            ArrayContent[2] = "15%";
        }
        if (ArrayContent[0] > 45012.61 && ArrayContent[0] <= 55976.16) {
            ArrayContent[1] = ArrayContent[0] - 7633.51;
            ArrayContent[2] = "22,5%";
        }
        if (ArrayContent[0] > 55976.16) {
            ArrayContent[1] = ArrayContent[0] - 10432.32;
            ArrayContent[2] = "27,5%";
        }
        console.log("salBruto: " + ArrayContent[0]);
        console.log("salLiquid: " + ArrayContent[1]);
        console.log("impostoRenda: " + ArrayContent[2]);


        //Para o usuário
        DivErro.style = "opacity: 100%";
        setTimeout(() => { DivErro.style = "opacity: 0%" }, 2000);
        DivEquivoco.innerText = "Salário Bruto: R$" + ArrayContent[0] +
            "\nSalário Líquido: R$" + ArrayContent[1] +
            "\nImposto de Renda: " + ArrayContent[2] +
            "\n😎";
        setTimeout(() => { DivEquivoco.style = "opacity:0%" }, 2000)
        var Objeto = { salBrutao: ArrayContent[0], salLiquido: ArrayContent[1], imposto: ArrayContent[2] }
        var JSON = JSON.stringify(Objeto);
        console.log(JSON);
    } else {
        DivErro.style = "opacity: 100%";
        setTimeout(() => { DivErro.style = "opacity: 0%" }, 2000);
        DivEquivoco.innerHTML = "Campo Faltando 😱";
        if (nome.value.length == 0) {
            nome.style = "border-color: red;";
            setTimeout(() => { nome.style = "border-color: black;" }, 1000);
        }
        if (valorHora.value.length == 0) {
            valorHora.style = "border-color: red;";
            setTimeout(() => { valorHora.style = "border-color: black;" }, 1000);
        }
        if (qtdeHrs.value.length == 0) {
            qtdeHrs.style = "border-color: red;";
            setTimeout(() => { qtdeHrs.style = "border-color: black;" }, 1000);
        }
    }

}
function mostraItens() {
    console.log(ArrayContent)
}
function limpando() {
    var nome = document.getElementById("nome");
    var valorHora = document.getElementById("valorHr");
    var qtdehoras = document.getElementById("qtdehoras");

    var DivErro = document.getElementById("DivErro");
    var DivEquivoco = document.getElementById("DivEquivoco");

    nome.value = "";
    valorHora.value = "";
    qtdehoras.value = "";

    DivErro.style = "opacity: 100%";
    setTimeout(() => { DivErro.style = "opacity: 0%" }, 2000);
    console.clear();
}


