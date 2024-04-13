const perguntas = [
    {
      pergunta: "Qual é um dos benefícios da energia solar para mitigação das mudanças climáticas?",
      resposta: [
        "Redução das emissões de gases poluentes",
        "Aumento da dependência de combustíveis fósseis",
        "Aumento da pegada de carbono",
      ],
      correta: 0 // Resposta correta: Redução das emissões de gases poluentes (a)
    },
    {
      pergunta: "Como a tecnologia da informação pode ser aplicada à energia solar?",
      resposta: [
        "Sistemas de monitoramento remoto",
        "Uso exclusivo de combustíveis fósseis",
        "Ignorar o impacto ambiental",
      ],
      correta: 0 // Resposta correta: Sistemas de monitoramento remoto (a)
    },
    {
      pergunta: "Que tipo de políticas governamentais podem incentivar a adoção da energia solar?",
      resposta: [
        "Subsídios e incentivos fiscais",
        "Aumento de impostos sobre sistemas solares",
        "Redução do acesso à energia renovável",
      ],
      correta: 0 // Resposta correta: Subsídios e incentivos fiscais (a)
    },
    {
      pergunta: "Qual é um exemplo prático de uso da tecnologia da informação na energia solar?",
      resposta: [
        "Smart grids",
        "Aumento da dependência de combustíveis fósseis",
        "Redução do acesso à energia renovável",
      ],
      correta: 0 // Resposta correta: Smart grids (a)
    },
    {
      pergunta: "Quais são os desafios futuros para a integração de sistemas solares à rede elétrica?",
      resposta: [
        "Desafios técnicos e regulatórios",
        "Facilidade de integração sem problemas",
        "Baixo custo de implementação",
      ],
      correta: 0 // Resposta correta: Desafios técnicos e regulatórios (a)
    },
    {
      pergunta: "O que é um objetivo principal ao promover a conscientização sobre energia solar?",
      resposta: [
        "Informar sobre os benefícios da energia solar",
        "Ignorar a importância da sustentabilidade",
        "Desencorajar o uso de energias renováveis",
      ],
      correta: 0 // Resposta correta: Informar sobre os benefícios da energia solar (a)
    },
    {
      pergunta: "Qual é um objetivo ao fornecer recursos educacionais sobre energia solar?",
      resposta: [
        "Oferecer informações práticas sobre tecnologias solares",
        "Incentivar o desperdício de energia",
        "Desestimular a inovação tecnológica",
      ],
      correta: 0 // Resposta correta: Oferecer informações práticas sobre tecnologias solares (a)
    },
    {
      pergunta: "Como a tecnologia da informação pode facilitar a implementação de sistemas solares?",
      resposta: [
        "Fornecendo orientações sobre planejamento e instalação",
        "Limitando o acesso a informações sobre energia solar",
        "Desencorajando a participação pública",
      ],
      correta: 0 // Resposta correta: Fornecendo orientações sobre planejamento e instalação (a)
    },
    {
      pergunta: "O que pode estimular a inovação tecnológica na área de energia solar?",
      resposta: [
        "Incentivo ao desenvolvimento de tecnologias mais eficientes",
        "Restrições à pesquisa e desenvolvimento",
        "Desinteresse em melhorar a sustentabilidade energética",
      ],
      correta: 0 // Resposta correta: Incentivo ao desenvolvimento de tecnologias mais eficientes (a)
    },
    {
      pergunta: "Por que é importante incentivar a adoção da energia solar?",
      resposta: [
        "Por suas vantagens econômicas e ambientais",
        "Por aumentar a dependência de combustíveis fósseis",
        "Por causar mais danos ao meio ambiente",
      ],
      correta: 0 // Resposta correta: Por suas vantagens econômicas e ambientais (a)
    },
  ];
  
  
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  const corretas = new Set();
  let totalDeAcertos = 0;
  const mostrarTotal = document.querySelector('#acertos span');
  mostrarTotal.textContent = totalDeAcertos + ' de ' + perguntas.length;
  
  for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.pergunta;
  
  for (let resposta of item.resposta) {
  const dt = document.createElement('dt');
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'pergunta-' + perguntas.indexOf(item);
  input.value = item.resposta.indexOf(resposta);
  input.addEventListener('change', (event) => {
    const estaCorreta = parseInt(event.target.value) === item.correta;
  
    if (estaCorreta && !corretas.has(item)) {
      corretas.add(item);
      totalDeAcertos++;
    } else if (!estaCorreta && corretas.has(item)) {
      corretas.delete(item);
      totalDeAcertos--;
    }
  
    mostrarTotal.textContent = totalDeAcertos + ' de ' + perguntas.length;
  });
  
  const span = document.createElement('span');
  span.textContent = resposta;
  dt.appendChild(input);
  dt.appendChild(span);
  
  quizItem.querySelector('dl').appendChild(dt);
  }
  
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem);
  }