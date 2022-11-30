alert("vamos ver alguns resultados matemáticos")
let FirstNumber = prompt("Digite o primeiro número: ")
let SecondNumber = prompt("Digite o segundo número: ")

FirstNumber = Number(FirstNumber)
SecondNumber = Number(SecondNumber)

const sum = FirstNumber + SecondNumber
const sub = FirstNumber - SecondNumber
const mult = FirstNumber * SecondNumber
const div = FirstNumber / SecondNumber
const restdiv = FirstNumber % SecondNumber


alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + mult)
alert("A divisão dos dois números é: " + div)
alert("O resto da divisão dos dois números é: " + restdiv)

if(sum % 2 == 0){
    alert("A soma dos dois números é Par: " + sum)
} else{
    alert("A soma dos dois números é Impar: " + sum)
}

if(FirstNumber == SecondNumber){
    alert("Os dois números são iguais")
} else {
    alert("Os dois números são diferentes")
}


