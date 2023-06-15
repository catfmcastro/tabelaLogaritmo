function Oba () {
    alert('ele é cara do momento')
}

function CalcularLn() {

    var valor = parseFloat(document.getElementById("inserir").value);
    var resultado = ln(valor);
    
    let str = `
    <div id="resposta">
    
    <h2>Valor de Ln (<span>${valor}</span>)</h2>
    
    <h4><p>Valor: ${resultado}</p></h4>
    
    </div>`;
    
    
    document.getElementById('resposta').innerHTML = str;

}

function ln(x) 
{

    var termos = 50;
    var soma = 0;

    for (var n = 1; n <= termos; n++) 
    {

        var numerador = Math.pow(x - 1, n);
        var denominador = n * Math.pow(x, n);
        var termo = numerador / denominador;

        soma += termo;
    }

    return soma;
}





