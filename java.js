function Oba () 
{    
    alert("--------------------O CARA DO MOMENTO--------------------\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣥⣤⣾⠟⡛⠿⠿⣭⣻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣽⡟⡏⢩⣦⡝⠋⢸⣶⠄⢲⡟⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣯⣷⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣌⡳⣜⢿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢀⡛⢌⢿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠄⠙⠌⣸⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⡿⠉⠉⠉⠉⢿⣿⣿⣿⠏⠉⠉⠉⠉⠉⠆⠄⠁⠄⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⡗⠫⠿⠆⠄⠸⢿⣿⣿⠂⠒⠲⡿⠛⠛⠂⠄⠄⢠⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⡛⣧⡔⠢⠴⣃⣠⣼⣿⣧⡀⠘⢢⣀⠄⠄⠄⠄⠄⢈⠁⢿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣿⠄⠄⠄⣸⠆⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣼⢿⣿⣿⣿⣿⡀⠄⠘⡀⢠⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⡌⠿⣫⣿⣦⠬⢭⣥⣶⣬⣾⣿⢿⣿⡟⠄⢀⣿⣶⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣧⠘⣉⠛⢻⣛⣛⣛⣻⡶⠮⠙⠃⣉⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⡆⠸⣿⣶⢾⣿⣯⣤⣄⣀⣾⡟⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿\n⠟⠿⠿⠿⠿⢿⣷⠄⣿⣿⣎⣹⢻⣿⣿⡿⡿⠁⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿\n⠄⠄⠄⠄⠄⠄⠄⣠⠘⣿⣿⣿⣿⣿⣿⡟⠁⣀⣀⣀⠄⠘⠿⣿⣿⣿⣿⣿⣿⣿");
}

function calcularLn()
{
    var valor = parseFloat(document.getElementById("entrada").value);
    var resultado = ln(valor);

    let str = `<div id="resps-block-one">

    <h3>Resposta: <span>${resultado.toFixed(5)}</span> </h3>

    </div>`

    document.getElementById('container-resp-ln').innerHTML = str;
}

// ? CALCULA LN 
function ln(logaritmando)
{

    var logaritmo = 0, x = 0, i = 1;
    x = (logaritmando-1)/(1+logaritmando);
    while(i<=999)
    {
        logaritmo += 2*((Math.pow(x, i))/i);
        i+=2;
    }
    return logaritmo;
}

// ? saída de log em qualquer base
function calcularLogX() 
{

    // entrada de dados
    var min = parseFloat(document.getElementById("min").value);
    var max = parseFloat(document.getElementById("max").value);
    var base = parseFloat(document.getElementById("base").value);
    var x = min, y = min, z = min;
    var temp1,temp2,temp3;
    var resultado1 = 0, resultado2 = 0, resultado3 = 0;
    var lnB = lnBase(base);
    let basao = `<h3 id = "desc-tabela">Cálculos na base ${base}</h3>`;

    document.getElementById('container-resp-base').innerHTML = basao;

    let str1 = `
    
    <div id="format-tabela">

    <table>
        <tr>
            <th class="title-tabela">+ 0.01</th>
        </tr>
        <tbody id ="tabela">
        </tbody>
        <tbody id ="time">
        </tbody>
    </table>
    </div>

    <div id="format-tabela-2">
    <table>
        <tr>
            <th class="title-tabela">+ 0.1</th>
        </tr>
        <tbody id ="tabela_2">
        </tbody>
        <tbody id ="time_2">
        </tbody>
    </table>
    </div>

    <div id="format-tabela-3">
    <table>
        <tr>
            <th class="title-tabela">+ 0.2</th>
        </tr>
        <tbody id ="tabela_3">
        </tbody>
        <tbody id ="time_3">
        </tbody>
    </table>
    </div>
    </div>`
    
    document.getElementById('container-resp-log').innerHTML = str1;
    let vaa1 = '';
    let va2 = '';
    let vaa3 = '';
    const startTime1 = performance.now(); 
    
    while(x.toFixed(2) <= max)
    {
        resultado1 = logX(x,lnB);
        vaa1 += `
        <tr>
            <td>log(${x.toFixed(2)}) = ${resultado1.toFixed(5)}</td>
        </tr>`
        x+=0.01;
        // todo: salvar na variavel e imprime na tabela
        
    }
    const endTime1 = performance.now();
    const tempo1 = endTime1 - startTime1;
    
    let time = `
    <tr>
        <th>Tempo: ${tempo1.toFixed(3)} ms</th>
    </tr>`;

    // todo: tempo de exec + imprime na tabela
    

   
    const startTime2 = performance.now(); 
    while(y.toFixed(1) <= max)
    {
        resultado2 = logX(y,lnB);
        va2 += `
        <tr>
            <td>log(${y.toFixed(1)}) = ${resultado2.toFixed(5)}</td>
        </tr>`
        y += 0.1;
        // todo: salvar na variavel e imprime na tabela
    }

    const endTime2 = performance.now();
    const tempo_2 = endTime2 - startTime2;
    
    let time_2 = `
    <tr>
        <th>Tempo: ${tempo_2.toFixed(3)} ms</th>
    </tr>`;
    // todo: tempo de exec + imprime na tabela

  
    const startTime3 = performance.now(); 

    while(z.toFixed(1) <= max)
    {
        resultado3 = logX(z,lnB);
        vaa3 += `
        <tr>
            <td>log(${z.toFixed(1)}) = ${resultado3.toFixed(5)}</td>
        </tr>`
        z+=0.2;
        // todo: salvar na variavel e imprime na tabela
    }


    const endTime3 = performance.now();
    const tempo_3 = endTime3 - startTime3;

    // todo: tempo de exec + imprime na tabela
    
    let time_3 = `
    <tr>
        <th>Tempo: ${tempo_3.toFixed(3)} ms</th>
    </tr>`; 

    document.getElementById('tabela').innerHTML = vaa1;
    document.getElementById('tabela_2').innerHTML = va2;
    document.getElementById('tabela_3').innerHTML = vaa3;
    document.getElementById('time').innerHTML = time;
    document.getElementById('time_2').innerHTML = time_2;
    document.getElementById('time_3').innerHTML = time_3;


    // saída de dados
    
}

// ? CALCULA LOG EM QUALQUER BASE
function logX(log, base) 
{
    var numero = ln(log) / base;
    return numero;
}

function lnBase (base)
{
    var lnB = ln(base);
    return lnB;
}
