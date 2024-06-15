// variables //
const corBala = "Marrom cocô"
const saborBala = 'banana '
const bala = saborBala.concat(corBala)

const space = "    GAYZÃO     "
/////////////

// Concatenação de Strings //
console.log(bala);
/////////////

// Comprimento da String //
console.log(bala.length);
/////////////

// Transformar em Maiúsculas && Transformar em Minúsculas //
console.log(bala.toUpperCase()); /* Maiúsclas */
console.log(bala.toLowerCase()); /* Minúsculas */
/////////////

//  Extrair uma Substring //
console.log(bala.substring(1,5))
/////////////

// Buscar Caracteres //
console.log(bala.search('a'))
console.log(bala.search('5'))
/////////////

// Repetir String //
console.log(bala.concat(' ').repeat(3));
/////////////

// Remover Espaços no Início e no Fim //
console.log(space.trim());
/////////////

// Substituir Caracteres //
console.log(bala.replace('banana', 'Bananada'));
/////////////

// Dividir String em Array //
console.log(bala.split(' '));
/////////////

// substitui caracteres //
function removeCaracterer(word){
    return word.normalize("NFD").replace(/[^a-zA-Z\s]/g, "")
}
/////////////

// Extrair Domínios de Endereços de E-mail //
function checkDomain(email){
    const arrDomain = email.split(' ')
    arrDomain.forEach((value)=> {
        if(value.includes("@")){
            console.log(value.split("@").pop())
        }
    });
}
checkDomain('andrew@example.com é o meu e-mail, igor@gmail.com é outro exemplo')
/////////////

// Frequência de palavras //
function freqWords(word){
    let split = word.split(' '),
    obj = {}

    for(let i = 0; i < split.length; i++){
        if(obj[split[i]] === undefined){
            obj[split[i]] = 1
        }
        else{
            obj[split[i]]++
        }
    }
    console.log(obj)
}
freqWords('Pego no pescoço até morrer!')
/////////////

// Verificar se uma String é um Palíndromo Ignorando Espaços e Pontuações //
function Palindromo(frase){
    if(frase.length <= 2){
        console.log('Só palavras igual ou acima de 3 letras')
        return
    }
    const texto = removeCaracterer(frase).toLowerCase().replace().split(/[-, .;:]+/).join('')
    const textoInvert = texto.split('').reverse().join('') 
    
    return texto === textoInvert ? console.log(`"${frase}" é um palíndromo`) : console.log(`"${frase}" não é um palíndromo`)
}
Palindromo("socorram-me subi no ônibus em marrocos")
/////////////

// Verificar Anagramas //
function Anagramas(frase1, frase2){
    const texto1 = removeCaracterer(frase1).split('').sort().join('')
    const texto2 = removeCaracterer(frase2).split('').sort().join('')
    return texto1 === texto2 ? console.log(`"${frase1}" e "${frase2}" são anagramas uma da outra`) : console.log(`${frase1} e ${frase2} não são anagramas`)
}
Anagramas('alô', 'ola')
/////////////

// Formatar String com Base na Convenção Especificada //
function Convencao(text,conv){
    function camelize(){
        return text.split(/[- , . ; :]+/).map((value, index) =>{
            if(index === 0 ){
                return value.toLowerCase()
            }
            return value.toUpperCase().slice(0,1)+value.slice(1).toLowerCase()
        }).join('')
    }
    function pascalize(){
        return text.split(/[- , . ; :]+/).map((value) =>{
            return value.toUpperCase().slice(0,1)+value.slice(1).toLowerCase()
        }).join('')
    }
    function kebablize(){
        return text.toLowerCase().split(/[- , . ; :]+/).join('-')
    }
    function snakelize(){
        return text.toLowerCase().split(/[- , . ; :]+/).join('_')
    }


    switch (conv){
        case "camelCase":
            console.log(camelize())
            break
        case "pascalCase":
            console.log(pascalize())
            break
        case "kebabCase":
            console.log('hello')
            break
        case "snakeCase":
            console.log(snakelize())
            break
        default:
            console.log('Escolha entre ( camelCase, pascalCase, kebabCase ou snakeCase )')
            break
    }
}
Convencao('pego-no pescoço até morrer!', 'snakeCase')
