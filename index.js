// -----------------------semana1-------------------------------------------

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item.
//  Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

// const guardamédia =  ((ator1.idade + ator2.idade+ator3.idade) / 3)
// console.log("O valor da média é ", (guardamédia))

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os 
// valores de variáveis booleanas criadas até aqui são verdadeiras.

//  console.log ("Todos atuaram como super-héroi?" + atuoucomosuperheroi1 && atuoucomosuperheroi2 && atuoucomosuperheroi3)


// 5.Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array.
//  Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings

//  const arrayfilmesqueparticipou1 = ["Thor","Vingadores","Resgate"]  /// ATOR CHRIS HEMSWORTH
//  const arrayfilmesqueparticipou2 = ["Top Gun", "Missão Impossível", "A Múmia"]  //ATOR TOM CRUISE
//  const arrayfilmesqueparticipou3 = ["Vingadores","Homem De Ferro","Dolittle"]   //ATOR ROBERT DOWNEY 


// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//   1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

//  console.log( nome1.toUpperCase())
//  console.log ("idade:" +  idade1 )
//  console.log ("Atuou como super-héroi?" + atuoucomosuperheroi1)
//  console.log ("Filmes que Atuou?" + arrayfilmesqueparticipou1)


//  console.log( nome2.toUpperCase())
//  console.log ("idade:" +  idade2 )
//  console.log ("Atuou como super-héroi?" + atuoucomosuperheroi2)
//  console.log ("Filmes que Atuou?" + arrayfilmesqueparticipou2)

//  console.log( nome3.toUpperCase())
//  console.log ("idade:" +  idade3 )
//  console.log ("Atuou como super-héroi?" + atuoucomosuperheroi3)
//  console.log ("Filmes que Atuou?" + arrayfilmesqueparticipou3)

//-----------------------semana2-------------------------------------------
//============ Ator 1 =====================================

ator1 = {
    nome: "Chris Hemsworth",
    idade: 39,
    atuoucomosuperheroi: true,
    arrayfilmesparticipou: ["Thor", "Vingadores", "Resgate"]
}


//============ Ator 2 =====================================
ator2 = {
    nome: "Tom Cruise",
    idade: 60,
    atuoucomosuperheroi: false,
    arrayfilmesparticipou: ["Top Gun", "Missão Impossível", "A Múmia"]

}

//============ Ator 3 =====================================

ator3 = {
    nome: "Robert Downey",
    idade: 57,
    atuoucomosuperheroi: true,
    arrayfilmesparticipou: ["Vingadores", "Homem De Ferro", "Dolittle"]
}

///==========================================================
//Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
const atores = []  /// array para guardar objetos

//adiconar objetos ao array 
atores.push(ator1, ator2, ator3)
console.log(atores)

//============ verificação Ator 1/2/3/ =======================

// if (ator1.atuoucomosuperheroi === true) { /// verdadeira 
//     atores.push(ator1)
// } else {
//     alert (ator1.nome  + " não atuou como super-heroi")
// }
// if (ator2.atuoucomosuperheroi === true) { ///falso
//      //atores.push(ator2)

// } else {
//     alert (ator2.nome + " não atuou como super-heroi")
// }     
// if (ator3.atuoucomosuperheroi === true) {
//     atores.push (ator3)

// } else {
//     alert (ator3.nome + " não atuou como super-heroi")
// }

//-----------------------semana3-------------------------------------------
//1 e 2

//============ Ator 1 =====================================

// for(let i in  ator1.arrayfilmesparticipou) {
//     stringarrayfilmesparticipou = ator1.arrayfilmesparticipou.join()
//    // console.log(stringarrayfilmesparticipou);

//   }
//    console.log(` Ator: ${ator1.nome} \n idade:${ator1.idade} \n atuou como Super-heroi? ${ator1.atuoucomosuperheroi} \n filmes que atuou:"${stringarrayfilmesparticipou}"`);

//============ Ator 2 =====================================

//    for(let i in  ator2.arrayfilmesparticipou) {
//     stringarrayfilmesparticipou = ator2.arrayfilmesparticipou.join()
//     //console.log(stringarrayfilmesparticipou);

//   }
//    console.log(` Ator: ${ator2.nome} \n idade:${ator2.idade} \n atuou como Super-heroi? ${ator1.atuoucomosuperheroi} \n filmes que atuou:"${stringarrayfilmesparticipou}"`);

//============ Ator 3 =====================================

//    for(let i in  ator3.arrayfilmesparticipou) {
//     stringarrayfilmesparticipou = ator3.arrayfilmesparticipou.join()
//     //console.log(stringarrayfilmesparticipou);
//   }
//    console.log(` Ator: ${ator3.nome} \n idade:${ator3.idade} \n atuou como Super-heroi? ${ator1.atuoucomosuperheroi} \n filmes que atuou:"${stringarrayfilmesparticipou}"`);

// // 3. Crie uma função que receba como parâmetro um objeto, e devolva a
// // string do relatório com os dados do objeto.

//  const funcao = (ator1) => {
//   for(let i in ator1) {
//     console.log(`${ator1.nome} \n ${ator1.idade} \n ${ator1.atuoucomosuperheroi} \n ${ator1.arrayfilmesparticipou}`)
//   }
//    }
//    funcao(ator1)

// 4. Crie uma função que recebe um array de objetos e uma string.
// Esta função deve retornar um objeto, e o objeto retornado deve 
// possuir apenas os itens que tenham o nome/título igual à string passada
// como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

// let todosatores = [
// {
//     nome : "Chris Hemsworth",
//     idade : 39,
//     atuoucomosuperheroi : true,
//     arrayfilmesparticipou:["Thor","Vingadores","Resgate"]
// },
// {

//     nome : "Tom Cruise",
//     idade : 60,
//     atuoucomosuperheroi : false,
//     arrayfilmesparticipou: ["Top Gun", "Missão Impossível", "A Múmia"]

// },
// {
//     nome : "Robert Downey",
//     idade : 57,
//     atuoucomosuperheroi : true,
//     arrayfilmesparticipou:["Vingadores","Homem De Ferro","Dolittle"]

// }

// ]

// const funcao2 =  (todosatores,nome) => {
// let nomesatores = 0   
// for(let i of todosatores) {
//     if(i.nome.toLowerCase() === nome.toLowerCase()){
//      console.log(i) 
//      nomesatores++ 
// }     
// } 

//  if(nomesatores === 0) {
//     alert("nenhum item encontrado!")
// }
// }
// let verificarnomeautor = prompt("Digite o nome de um ator")
// funcao2(todosatores,verificarnomeautor)

/////////////////semana 6///////////////////////////////////////////////////////////////////

// 1. Altere seu código para que a tela de lista de itens crie os elementos da lista através de
//  manipulação do DOM.

// Atualmente, seus elementos estão criados no HTML e no CSS de forma estática, sem que exista 
// interação entre HTML e CSS e o Script que criamos. A ideia é que agora, os dados que compõem 
// os elementos HTML devem ser criados a partir do nosso código JS. Para isso, devemos manipular
//  os objetos do HTML e do CSS utilizando o DOM.

// 2. Utilize a função de busca criada no item 2 da semana 6 para fazer com que ao digitar um 
// campo no input e apertar o botão, apenas os itens com nome igual ao da busca sejam renderizados
//  na tel


/// semana 6////////////////////////////////////////



// function search_atores() {
//     let input = document.getElementById('searchbar').value
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName("todosatores");
      
//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";                 
//         }
//     }
// }

function todosatores() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName("todosatores");
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";                 
        }
      

    
    }
}









