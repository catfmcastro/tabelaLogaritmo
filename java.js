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
    
    console.time('Tempo1');
    const startTime1 = performance.now(); 
    
    while(x <= max)
    {
        temp1 = x
        resultado1 = logX(temp1,base);
        x+=0.01;
        vaa1 += `
        <tr>
            <td>log(${temp1.toFixed(2)}) = ${resultado1.toFixed(5)}</td>
        </tr>`
        // todo: salvar na variavel e imprime na tabela
    }
    console.timeEnd('Tempo1');

    const endTime1 = performance.now();
    const tempo1 = endTime1 - startTime1;
    
    let time = `
    <tr>
        <th>Tempo: ${tempo1.toFixed(3)} ms</th>
    </tr>`;

    // todo: tempo de exec + imprime na tabela
    
    console.time('Tempo2');
    const startTime2 = performance.now(); 
    while(y <= max)
    {
        temp2 = y;
        resultado2 = logX(temp2,base);
        y+=0.1;
        va2 += `
        <tr>
            <td>log(${temp2.toFixed(1)}) = ${resultado2.toFixed(5)}</td>
        </tr>`
        // todo: salvar na variavel e imprime na tabela
    }
    console.timeEnd('Tempo2');
    const endTime2 = performance.now();
    const tempo_2 = endTime2 - startTime2;
    
    let time_2 = `
    <tr>
        <th>Tempo: ${tempo_2.toFixed(3)} ms</th>
    </tr>`;
    // todo: tempo de exec + imprime na tabela

    console.time('Tempo3');
    const startTime3 = performance.now(); 

    while(z <= max)
    {
        temp3 = z;
        resultado3 = logX(temp3,base);
        z+=0.2;
        vaa3 += `
        <tr>
            <td>log(${temp3.toFixed(1)}) = ${resultado3.toFixed(5)}</td>
        </tr>`
        // todo: salvar na variavel e imprime na tabela
    }

    console.timeEnd('Tempo3');
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
    var numero = ln(log) / ln(base);
    return numero;
}
