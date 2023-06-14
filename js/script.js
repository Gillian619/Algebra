function circulo() {
    const pi = 3.14
    let raio = parseFloat(document.getElementById("raio").value);
    let area = (+ pi * (raio * raio)).toFixed(2);
    if (raio, area == 0) {
        document.getElementById("resultado-a").innerHTML = "Erro: Informe um valor válido"
    }
    else {
        document.getElementById('resultado-a').innerHTML = area;
    }
}
function retangulo() {
    let ar = parseFloat(document.getElementById("ar").value);
    let br = parseFloat(document.getElementById("br").value);
    let arear = (+ ar * br).toFixed(2);
    if (ar, br, arear == 0) {
        document.getElementById('resultado-r').innerHTML = "Erro: Informe um valor válido"
    }
    else {
        document.getElementById('resultado-r').innerHTML = arear;
    }
}
function triangulo() {
    let at = parseFloat(document.getElementById("at").value);
    let bt = parseFloat(document.getElementById("bt").value);
    let areat = (+ (at * bt) / 2).toFixed(2);
    if (at, bt, areat) {
        document.getElementById('resultado-t').innerHTML = "Erro: Informe um valor válido"
    }
    else {
        document.getElementById('resultado-t').innerHTML = areat;
    }
}
function hip() {
    let co = parseFloat(document.getElementById("co").value);
    let ca = parseFloat(document.getElementById("ca").value);
    let hip = (+ Math.sqrt(Math.pow(co, 2) + Math.pow(ca, 2))).toFixed(2);
    if (co, ca, hip = 0) {
        document.getElementById("resultado-h").innerHTML = "Erro: Informe um valor válido"
    }
    else {
        document.getElementById("resultado-h").innerHTML = hip;
    }
}
function dolar() {
    let dol = parseFloat(document.getElementById("dol").value);
    let real = parseFloat(document.getElementById("real").value);
    let rd = (+ real * dol).toFixed(2);
    if (dol, real, rd <= 0) {
        document.getElementById("resultado-d").innerHTML = "Erro: Informe um valor válido"
    }
    else {
        document.getElementById("resultado-d").innerHTML = rd;
    }
}
function degree() {
    let ce = parseFloat(document.getElementById("ce").value)
    let fe = (+ (ce * 1.8) + 32).toFixed(2)
    document.getElementById("resultado-c").innerHTML = fe;
}
function media() {
    let n1 = parseFloat(document.getElementById("n1").value)
    let n2 = parseFloat(document.getElementById("n2").value)
    let n3 = parseFloat(document.getElementById("n3").value)
    let nm = ((n1 + n2 + n3) / 3).toFixed(2);
    document.getElementById("resultado-m").innerHTML = nm;
}
function velocidade() {
    let ms = parseFloat(document.getElementById("ms").value)
    let km = (ms / 3.6).toFixed(2)
    if (ms = 0) {
        document.getElementById("resultado-v").innerHTML = "Erro: velocidade invalida"
    }
    document.getElementById("resultado-v").innerHTML = km
}
function mascara() {
    let a = parseFloat(document.getElementById("a").value)
    let b = parseFloat(document.getElementById("b").value)
    let c = parseFloat(document.getElementById("c").value)
    let delta = parseFloat(Math.pow(b, 2) - 4 * a * c)
    let x1 = parseFloat((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2)
    let x2 = parseFloat((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2)
    if (delta < 0) {
        alert("Erro: Delta negativo não é valido").innerHTML
    }
    if (x1, x2 = NaN) {
        alert("Erro: Informe um valor válido").innerHTML
    }
    else {
        document.getElementById("resultado-bh").innerHTML = " x1= " + x1 + " x2= " + x2
    }
}