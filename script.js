// Exercício 1: Callbacks Básicos
// Descrição: Crie uma função chamada getData que simula a busca de dados de um servidor. Esta função deve receber um callback que será chamado com os dados obtidos após 2 segundos.
// Objetivo: Entender o uso de callbacks para lidar com operações assíncronas.
// Instruções:

// Crie uma função getData que usa setTimeout para simular um atraso de 2 segundos.
// Depois do tempo, chame um callback passado para a função com um objeto que contém a chave data e o valor "Informações recebidas".
// Teste chamando a função com diferentes callbacks que exibam o valor recebido.

// function carregarDados(callback){
//         console.log('Iniciando o carregamento dos dados...')
//         setTimeout(()=>{
//                 console.log('Dados Carregados...')
//                 callback(Error)
//         },2000)
// }
// function mostrarDados(){
// setTimeout(()=>{
//         console.log('Exibindo Dados')
// },3000)

// }

// carregarDados(mostrarDados)

// Exercício 2: Promises Básico
// Descrição: Converta a função getData do primeiro exercício para usar Promises em vez de callbacks.
// Objetivo: Introduzir promises como uma alternativa moderna ao callback.
// Instruções:
// Crie uma nova função que retorne uma Promise.
// A Promise deve resolver com os dados após 2 segundos ou rejeitar com uma mensagem de erro.
// Teste chamando a função e use .then() para lidar com o sucesso e .catch() para tratar erros.
function tempos(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (min * max) + min);
}

function dados(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg != "string") reject("Erro ");1

    setTimeout(() => {
      resolve(msg);
    }, 2000);
  });
}

dados("Conexão com BD")
  .then((resposta) => {
    console.log(resposta);
    return dados("Buscando Dados Na Base ...",tempos(1,5));
  })
  .then((resposta) => {
    console.log(resposta);
    return dados("Dados Encontrados",tempos(2,4));
  })
  .then(() => {
    console.log("Exibir dados Na Tela");
  })
  .catch((e) => {
    console.log("Erro Na BD", e);
  });

  
// Exercício 3: Encadeamento de Promises
// Descrição: Crie duas funções assíncronas getUser e getPosts, onde getUser busca dados de um usuário e getPosts busca as postagens desse usuário. Ambas devem retornar Promises.
// Objetivo: Aprender a usar o encadeamento de promises e manipulação de múltiplas operações assíncronas.
// Instruções:
// Crie a função getUser que simula buscar um usuário após 1 segundo.
// Crie a função getPosts que simula buscar as postagens desse usuário após mais 2 segundos.
// Encadeie as duas promessas para exibir os dados do usuário e, em seguida, as postagens.

