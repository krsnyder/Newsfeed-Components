/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import data from './data';

function articleMaker({ title, date, first, second, third }) {

  const article = document.createElement('div')
  const articleTitle = document.createElement('h2')
  const articleDate = document.createElement('p')
  const firstP = document.createElement('p')
  const secondP = document.createElement('p')
  const thirdP = document.createElement('p')
  const expand = document.createElement('span')

  article.appendChild(articleTitle)
  article.appendChild(articleDate)
  article.appendChild(firstP)
  article.appendChild(secondP)
  article.appendChild(thirdP)
  article.appendChild(expand)

  article.classList.add('article');
  articleDate.classList.add('date');
  expand.classList.add('expandButton');
  
  expand.addEventListener('click', (e) => {
    e.target.classList.toggle('off')
  })
  return (article)
}




const articles = data.map(data => {
  const article = articleMaker(data)
  return article
})

articles.forEach(article => {
  x.appendChild(article)
})

export default articleMaker