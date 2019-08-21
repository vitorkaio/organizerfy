export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: "https://api.adorable.io/avatars/205/abott@adorable.png"
        },
        {
          id: 2,
          content: 'Estudar graphql',
          labels: ['#7159c1'],
          user: "https://api.adorable.io/avatars/205/abott@adorable.png"
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: "https://api.adorable.io/avatars/205/abott@adorable.png"
        },
        {
          id: 4,
          content: 'Estudar "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          user: "https://api.adorable.io/avatars/205/abott@adorable.png"
        },
        {
          id: 5,
          content: 'TDD com Jest',
          labels: ['#54e1f7'],
          user: "https://api.adorable.io/avatars/205/abott@adorable.png"
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: "https://api.adorable.io/avatars/205/abott@adorable.png"
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: "https://api.adorable.io/avatars/205/abott@adorable.png"
        },
        {
          id: 8,
          content: 'Immer aplicado com redux',
          labels: ['#54e1f7'],
          user: "https://api.adorable.io/avatars/205/abott@adorable.png"
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Gerador de templates para graphql-yoga',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Internacionalização de aplicações Node.js, ReactJS e React Native',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}