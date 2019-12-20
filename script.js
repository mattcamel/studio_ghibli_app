// var request = new XMLHttpRequest()
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
// request.onload = function(){
//   var data = JSON.parse(this.response)
//   if(request.status >= 200 && request.status < 400){
//     data.forEach(movie => console.log(movie.title))
//   }else{
//     const errorMessage = document.createElement('marquee')
//     errorMessage.textContent = `Gah it's not working!!!`
//     app.appendChild(errorMessage)
//   } 
// }
// request.send()

const app = document.getElementById('root')
const logo = document.createElement('img')
logo.src = 'logo.svg'

const message = document.createElement('marquee')
message.textContent = `S t u d i o  G h i b l i . . . . .`

const container = document.createElement('div')
container.setAttribute('class', 'container')

const link_base = 'https://www.studioghibli.com.au/'
const regexp = /\s/g

app.appendChild(logo)
app.appendChild(container)
app.appendChild(message)

fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => response.json())
  .then(data => {
    data.forEach(movie => {
      const a = document.createElement('a')
      let link_title = movie.title.replace(regexp, '').toLowerCase()
      if(movie.title === 'Castle in the Sky'){
        a.href = link_base + 'laputa' + link_title
      }else{
        a.href = link_base + link_title
      }

      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      const p = document.createElement('p')
      movie.description = movie.description.substring(0,300)
      p.textContent = `${movie.description}...`

      container.appendChild(card)

      card.appendChild(a)
      a.appendChild(h1)
      a.appendChild(p)
    })
  })
.catch(err => console.log(err))
