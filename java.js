function Oba () {
    alert('ele é o cara do momento');
}




function calcularLn() {
    var valor = parseFloat(document.getElementById("entrada").value);
    var resultado = ln(valor);
    console.log(parseFloat(resultado));
}

function ln(x) {
    var termos = 100;
    var soma = 0;

    for (var n = 1; n <= termos; n++) {
        var numerador = Math.pow(x - 1, n);
        var denominador = n * Math.pow(x, n);
        var termo = numerador / denominador;

        soma += termo;
    }

    return soma;
}

function calcularLogX() {
    var log = parseFloat(document.getElementById("valor").value);
    var base = parseFloat(document.getElementById("base").value);
    var resultadoLog = logX(log, base);
    console.log(parseFloat(resultadoLog));
}

function logX(log, base) {
    var numero = ln(log) / ln(base);
    return numero;
}


