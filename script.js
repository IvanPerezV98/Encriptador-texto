function encriptar() {
    const a = "ai"; 
    const e = "enter"; 
    const i = "imes"; 
    const o = "ober"; 
    const u = "ufat";
    let encriptar = document.getElementById("entrada_texto").value;
    let dividido = encriptar.split("");

    document.getElementById("no_texto").style.display = "none";
    document.getElementById("mostrar_texto").style.display = "flex";
    document.getElementById('copiar').style.backgroundColor = 'white';
    document.getElementById('copiar').style.color = 'black';
    document.getElementById('copiar').innerHTML = 'Copiar';

    for (let x = 0; x < dividido.length; x++) {
        if (dividido[x] == "a") {
            dividido.splice(x, 1, a);
        }
        if (dividido[x] == "e") {
            dividido.splice(x, 1, e);
        }
        if (dividido[x] == "i") {
            dividido.splice(x, 1, i);
        }
        if (dividido[x] == "o") {
            dividido.splice(x, 1, o);
        }
        if (dividido[x] == "u") {
            dividido.splice(x, 1, u);
        }
    }
    document.getElementById('mostrar').innerHTML = dividido.join("");
}

function desencriptar() {
    document.getElementById("no_texto").style.display = "none";
    document.getElementById("mostrar_texto").style.display = "flex";
    document.getElementById('copiar').style.backgroundColor = 'white';
    document.getElementById('copiar').style.color = 'black';
    document.getElementById('copiar').innerHTML = 'Copiar';

    let desencriptar = document.getElementById("entrada_texto").value;
    let resultado = desencriptar.replace(/ai/gi, "a");
    resultado = resultado.replace(/enter/gi, "e");
    resultado = resultado.replace(/ufat/gi, "u");
    resultado = resultado.replace(/imes/gi, "i");
    resultado = resultado.replace(/ober/gi, "o");

    document.getElementById('mostrar').innerHTML = resultado;
}

function copiar(){ 
    var content = document.getElementById('mostrar').innerHTML;
    
    navigator.clipboard.writeText(content)
    .then(() => {
        document.getElementById('copiar').style.backgroundColor = '#0A3871';
        document.getElementById('copiar').style.color = 'white';
        document.getElementById('copiar').innerHTML = '✅ Copiado';
    })
    .catch(err => {
        alert('Ocurrio un error, intente de nuevo', err);
    })
    
}

