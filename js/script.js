function circulo() {
    const pi = 3.14
    let raio = prompt("insira o raio do circulo")
    alert("a área do circulo é =" + pi * (raio * raio))
}
function hip() {
    let co = prompt("insira o cateto oposto")
    let ca = prompt("insira o cateto adjascente")
    alert("o valor da hipotenusa é =" + Math.sqrt((co * co) + (ca * ca)))
}
function dolar() {
    const dol = 4.93
    let real = prompt("insira o valor em reais(R$)")
    alert("o valor em dolar é =" + real * dol)
}
function degree() {
    let ce = prompt("insira a temperatura em celcius")
    alert("A temperatura em fahrenheit é =" + (ce * 1.8) + 32)
}
function media() {
    let n1 = parseInt(prompt("identifique a primeira nota"))
    let n2 = parseInt(prompt("identifique a segunda nota"))
    let n3 = parseInt(prompt("identifique a terceira nota"))
    alert("a sua nota media é " + (n1 + n2 + n3) / 3)
}
function mascara() {
    let a = parseInt(prompt("identifique a a"))
    let b = parseInt(prompt("identifique a b"))
    let c = parseInt(prompt("identifique a c"))
    let delta = parseInt((b * b) - 4 * (a * c))
    let x1 = parseInt(-b + (delta * delta) / (2 * a))
    let x2 = parseInt(-b - (delta * delta) / (2 * a))
    alert("o valor de x1 e x2 são =" + x1 + "e" + x2)
}