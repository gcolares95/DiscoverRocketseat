/* 
    Buscando e contando dados em array

    Baseado no Array de livros por categoria abaixo, faça-os seguintes desafios

    * Contar o número de categorias e o numero de livros em cada categoria
    * Contar o número de autores
    * Mostrar livro do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const bookByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury", 
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

// numero de categorias
const totalCategories = bookByCategory.length
console.log('numero de categorias:' ,totalCategories)
console.log()

// numero de livros em cada categoria
for(let category of bookByCategory) {
  console.log('Total de livros da categoria:', category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = []
  
  for(let category of bookByCategory) { // for para navegar pela categoria
    for(let book of category.books) { // for para navegar pelos livros
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }

  console.log('total de autores: ', authors.length)
}

countAuthors();

// function booksOfAugustoCury() {
//   let books = []
  
//   for(let category of bookByCategory) { // for para navegar pela categoria
//     for(let book of category.books) { // for para navegar pelos livros
//       if (book.author === 'Augusto Cury') {
//         books.push(book.title)
//       }
//     }
//   }

//   console.log('Livros do autor: ', books)
// }

// booksOfAugustoCury()


// TRANSFORMANDO A FUNCAO ACIMA PARA PEGAR RETORNAR LIVROS DE QUALQUER AUTOR
function booksOfAuthor(author ) {
  let books = []
  
  for(let category of bookByCategory) { // for para navegar pela categoria
    for(let book of category.books) { // for para navegar pelos livros
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }

  console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Robert T. Kiyosaki e Sharon L. Lechter')