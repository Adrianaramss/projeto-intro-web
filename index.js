

ator1 = {
   nome : "Chris Hemsworth",
   idade : 39,
   atuoucomosuperheroi : true,
   arrayfilmesparticipou:["Thor","Vingadores","Resgate"]
}
console.log (`Ator: \"${ator1.nome}\n idade: ${ator1.idade}\n atuou como Super-heroi? ${ator1.atuoucomosuperheroi}\n filmes que atuou: ${ator1.arrayfilmesparticipou} `)


ator2 = {
    nome : "Tom Cruise",
    idade : 60,
    atuoucomosuperheroi : false,
    arrayfilmesparticipou: ["Top Gun", "Missão Impossível", "A Múmia"]

}
console.log (`Ator: \"${ator2.nome}\n idade: ${ator2.idade}\n atuou como Super-heroi? ${ator2.atuoucomosuperheroi}\n filmes que atuou: ${ator2.arrayfilmesparticipou} `)

ator3 = {
    nome : "Robert Downey",
    idade : 57,
    atuoucomosuperheroi : true,
    arrayfilmesparticipou:["Vingadores","Homem De Ferro","Dolittle"]
}
console.log (`Ator: \"${ator3.nome}\n idade: ${ator3.idade}\n atuou como Super-heroi? ${ator3.atuoucomosuperheroi}\n filmes que atuou: ${ator3.arrayfilmesparticipou} `)

//Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
const atores = []  /// array para guardar objetos

//adiconar objetos ao array 
//atores.push(ator1,ator2,ator3)
//console.log(atores)

///verificação 

if (ator1.atuoucomosuperheroi === true) {
    atores.push(ator1)
} else {
    alert (ator1.nome  + " não atuou como super-heroi")
}
if (ator2.atuoucomosuperheroi === true) {
     //atores.push(ator2)

} else {
    alert (ator2.nome + " não atuou como super-heroi")
}     
if (ator3.atuoucomosuperheroi === true) {
    atores.push (ator3)
    
} else {
    alert (ator3.nome + " não atuou como super-heroi")
}




//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item.
// Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const guardamédia =  ((ator1.idade + ator2.idade+ator3.idade) / 3)
console.log("O valor da média é ", (guardamédia))



//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os 
//valores de variáveis booleanas criadas até aqui são verdadeiras.

 ///console.log ("Todos atuaram como super-héroi?" + atuoucomosuperheroi1 && atuoucomosuperheroi2 && atuoucomosuperheroi3)


//5.Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array.
 //Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings

// const arrayfilmesqueparticipou1 = ["Thor","Vingadores","Resgate"]  /// ATOR CHRIS HEMSWORTH
// const arrayfilmesqueparticipou2 = ["Top Gun", "Missão Impossível", "A Múmia"]  //ATOR TOM CRUISE
// const arrayfilmesqueparticipou3 = ["Vingadores","Homem De Ferro","Dolittle"]   //ATOR ROBERT DOWNEY 


//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
 // 1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

// console.log( nome1.toUpperCase())
// console.log ("idade:" +  idade1 )
// console.log ("Atuou como super-héroi?" + atuoucomosuperheroi1)
// console.log ("Filmes que Atuou?" + arrayfilmesqueparticipou1)


// console.log( nome2.toUpperCase())
// console.log ("idade:" +  idade2 )
// console.log ("Atuou como super-héroi?" + atuoucomosuperheroi2)
// console.log ("Filmes que Atuou?" + arrayfilmesqueparticipou2)

// console.log( nome3.toUpperCase())
// console.log ("idade:" +  idade3 )
// console.log ("Atuou como super-héroi?" + atuoucomosuperheroi3)
// console.log ("Filmes que Atuou?" + arrayfilmesqueparticipou3)

