let nome = "Leonam"
let idade = 18
let sobrenome = "Alves"
let mês = "Agosto"
let humano = true

if (idade >= 18 || humano){
    console.log("Ae você é maior de idade e você é humano")
}else{
    console.log("Você não é maior de idade e você não é humano")
}

if (mês == "Janeiro" || mês == "Dezembro"){
    console.log ("Você faz aniversário nas férias de fim de ano")
}else{
    console.log("Você não faz aniversário nas férias de fim de ano" )
}

if (sobrenome.length > 6 || nome.substring(0,1) == "E"){
console.log("Seu sobrenome tem mais de 6 letras e seu nome começa com a letra E")
}else{
    console.log("Seu sobrenome tem menos de 6 letras e seu nome não começa com a letra E")
}



