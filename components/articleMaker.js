/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import data from './data';

function articleMaker({ title, date, first, second, third }) {
  // Creating each element of the article
  const article = document.createElement('div')
  const articleTitle = document.createElement('h2')
  const articleDate = document.createElement('p')
  const firstP = document.createElement('p')
  const secondP = document.createElement('p')
  const thirdP = document.createElement('p')
  const expand = document.createElement('span')

  // Appending each child to the parent article element
  article.appendChild(articleTitle)
  article.appendChild(articleDate)
  article.appendChild(firstP)
  article.appendChild(secondP)
  article.appendChild(thirdP)
  article.appendChild(expand)


  // Adding classes to where necessary
  article.classList.add('article');
  articleDate.classList.add('date');
  expand.classList.add('expandButton');

  // Using the object values to fill in the text content
  articleTitle.textContent = title
  // console.log(article.)
  articleDate.textContent = date
  firstP.textContent = first
  secondP.textContent = second
  thirdP.textContent = third
  expand.textContent = '+'

  // Event Listener toggling the 'article-open' class
  expand.addEventListener('click', () => {
    article.classList.toggle('article-open')
  })

  return (article)
}

let parent = document.querySelector('.articles')

const articles = data.map(data => {
  const article = articleMaker(data)
  return article
})

articles.forEach(article => {
  parent.appendChild(article)
})

// articleMaker(data)

export default articleMaker