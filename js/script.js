function circulo() {
    const pi = 3.14
    let raio = parseFloat(document.getElementById("raio").value);
    let area = (+ pi * (raio * raio)).toFixed(2);
    document.getElementById('resultado-a').innerHTML = area;
}
function retangulo() {
    const pi = 3.14
    let raio = parseFloat(document.getElementById("raio").value);
    let arear = (+ "a-r" * "b-r").toFixed(2);
    document.getElementById('resultado-r').innerHTML = arear;
}
function triangulo() {
    const pi = 3.14
    let raio = parseFloat(document.getElementById("raio").value);
    let areat = (+ 2 / ("a-t" * "b-t")).toFixed(2);
    document.getElementById('resultado-t').innerHTML = areat;
}
function hip() {
    let co = parseFloat(document.getElementById("co").value);
    let ca = parseFloat(document.getElementById("ca").value);
    let hip = (+ Math.sqrt(Math.pow(co, 2) + Math.pow(ca, 2))).toFixed(2);
    document.getElementById("resultado-h").innerHTML = hip;
}
function dolar() {
    let dol = parseFloat(document.getElementById("dol").value);
    let real = parseFloat(document.getElementById("real").value);
    let rd = (+ real * dol).toFixed(2);
    document.getElementById("resultado-d").innerHTML = rd;
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
function mascara() {
    let a = parseFloat(document.getElementById("a").value)
    let b = parseFloat(document.getElementById("b").value)
    let c = parseFloat(document.getElementById("c").value)
    let delta = parseFloat(Math.pow(b, 2) - 4 * a * c)
    let x1 = parseFloat((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2)
    let x2 = parseFloat((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2)
    document.getElementById("resultado-bh").innerHTML = x1, x2;
}