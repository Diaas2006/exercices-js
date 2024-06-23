// arrays //
let numberArr = [1, 2, 3, 4]
let otherNumArr = [1, 2, 3, 4]
const nomesArr = ['Igor', 'Igor', 'Ricardo Milos', "Ricardo Milos", "Ricardo Milos", "Jailson"]
let boleanos = [true, false, false, false, true]
const palavrasRandom = [
    "banana",
    "computador",
    "montanha",
    "abacaxi",
    "oceano"
];

///////////

// Soma dos Elementos de um Array //
let soma = 0;
numberArr.forEach(value => {
    soma += value
})
console.log(soma)
///////////

// Encontrar o Maior Número em um Array //
console.log(Math.max(...numberArr))
///////////

// Inverter um Array //
console.log(numberArr.reverse())
///////////a

// Remover Duplicatas de um Array //
const uniq = [...new Set(nomesArr)]
console.log(uniq)
///////////

// Achar a Interseção de Dois Arrays //
console.log(numberArr.filter(Set.prototype.has, new Set(otherNumArr)))
///////////

// Mover Zeros para o Fim do Array //
let zeros = []
let otherNumber = []

numberArr = [1, 2, 4, 0, 0, 0, 5]
numberArr.forEach(value => {
    if (value === 0) {
        zeros += value
    }
    else {
        otherNumber += value
    }
})
numberArr = [...otherNumArr, ...zeros]
console.log(numberArr)
///////////

// Rotacionar um Array //
numberArr = [1, 2, 3, 4];

function rotacionarArr(arr, quant) {
    // let len = arr.length
    // arr.push(...arr.splice(0, (-quant % len + len) % len))
    // return arr
}
console.log(rotacionarArr(numberArr, -1))
///////////

// Verificar se Dois Arrays são Iguais //
function arrayIgual(arr1, arr2) {
    arr1 = arr1.join('')
    arr2 = arr2.join('')
    console.log(arr1 === arr2)
}
arrayIgual(numberArr, otherNumArr)
///////////

// Encontrar o Elemento que Mais se Repete em um Array //
function elementeMaisRepetido(arr) {
    let obj = {}
    arr.forEach(value => {
        if (obj[value] === undefined) {
            obj[value] = 1
        }
        else {
            obj[value]++
        }
    })
    const maxValue = Math.max(...Object.values(obj))
    for (chave in obj) {
        if (obj[chave] === maxValue) {
            return console.log(`Elemento que mais foi repetido "${chave}: ${maxValue}"`)
        }
    }

}
elementeMaisRepetido(nomesArr)
///////////

// Contar Ocorrências de Elementos em um Array //
function countOcrr(arr) {
    let obj = {}
    arr.forEach(value => {
        if (obj[value] === undefined) {
            obj[value] = 1
        }
        else {
            obj[value]++
        }
    })
    console.log(obj)
}
countOcrr(nomesArr)
///////////

// Remover Elementos Falsos de um Array //
function removeFalse(arr) {
    arr.filter(value => {
        if (value === true) {
            boleanos = value
            return console.log(boleanos)
        }
    })
}
removeFalse(boleanos)
///////////

// Transformar um Array de Strings //
function transformArray(arr) {
    const regex = /[aeiouAEIOU]/

    let newArray = []
    let vogaisQuant = 0
    let consoantesQuant = 0

    arr.forEach((value) => {
        for (char of value) {
            if (regex.test(char)) {
                vogaisQuant++
            }
            else {
                consoantesQuant++
            }
        }
        let transformString = ''
        if (vogaisQuant > consoantesQuant) {
            transformString = value.toLowerCase()
        }
        else {
            transformString = value.toUpperCase()
        }
        newArray.push(transformString)
    });
return console.log(newArray)
}
transformArray(palavrasRandom)
///////////