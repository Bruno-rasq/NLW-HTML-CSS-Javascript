// array de perguntas do quiz
const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    alternativas: ["var x;", "let x;", "const x;", "todas as anteriores"],
    correta: 3
  },
  {
    pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
    alternativas: ["5", "32", "Erro", "'32'"],
    correta: 3
  },
  {
    pergunta: "Qual é o método em JavaScript usado para remover o último elemento de um array?",
    alternativas: [".pop()", ".push()", ".remove()", ".shift()"],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
    alternativas: ["Selecionar um elemento pelo ID", "Selecionar um elemento pelo nome da classe", "Selecionar um elemento pelo seletor CSS", "Selecionar um elemento pelo nome da tag"],
    correta: 3
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    alternativas: ["Comparação estrita (igualdade em valor e tipo)", "Atribuição", "Comparação solta (igualdade em valor, mas não em tipo)", "Nenhuma das anteriores"],
    correta: 1
  },
  {
    pergunta: "Qual é o resultado da expressão 4 + '5' em JavaScript?",
    alternativas: ["9", "45", "Erro", "'45'"],
    correta: 3
  },
  {
    pergunta: "Qual é o tipo de dados do valor retornado pela função 'typeof' em JavaScript?",
    alternativas: ["String", "Number", "Object", "String, Number e Object"],
    correta: 1
  },
  {
    pergunta: "Qual método JavaScript é usado para arredondar um número para a próxima inteiro mais próximo?",
    alternativas: [".ceil()", ".floor()", ".round()", ".toFixed()"],
    correta: 3
  },
  {
    pergunta: "O que o método 'addEventListener' faz em JavaScript?",
    alternativas: ["Adiciona um evento a um elemento", "Remove um evento de um elemento", "Executa um evento", "Nenhuma das anteriores"],
    correta: 1
  },
  {
    pergunta: "Qual é o operador lógico 'E' em JavaScript?",
    alternativas: ["&&", "||", "!", "=="],
    correta: 1
  }
];

// variaveis globais
const quiz = document
  .querySelector('#quiz');
const template = document
  .querySelector('template');

// para cada item de perguntas faça 
for(const item of perguntas){
  // cria um clone do template
  const quizItem = template
    .content
    .cloneNode(true);

  // adiciona o texto da pergunta
  quizItem
   .querySelector('h3')
   .textContent = item.pergunta;

  // para cada alternativa de item faça
  for(let resposta of item.alternativas){
    // cria um clone do template
    const dt = quizItem
      .querySelector('dl dt')
      .cloneNode(true);

    // adiciona o texto da alternativa
    dt
    .querySelector('span')
    .textContent = resposta;

    // adiciona o clone da alternativa ao clone da pergunta
    quizItem
      .querySelector('dl')
      .appendChild(dt);
  }

  // remove o span do template
  quizItem
    .querySelector('dl dt')
    .remove();

  // adiciona o clone da pergunta ao quiz
  quiz.appendChild(quizItem)
}