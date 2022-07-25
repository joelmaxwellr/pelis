//https://api.themoviedb.org/3/movie/13223?api_key=8277ae593821f15114e4b063f6ff057b&append_to_response=credits
const secret_key = '98b3c68996018e9c3847d287459ed0b8'
const divCard = document.getElementById('divCard')
const body = document.body
const base_URL = 'https://image.tmdb.org/t/p/original/'
function trendingMovies() {
  fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${secret_key}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)

      imageMovie(data)
    })
}

function imageMovie(data) {
  data.results.map((element) => {
    const img = document.createElement('img')
    img.src = `https://image.tmdb.org/t/p/original${element.poster_path}`
    img.width = '250'

    divCard.append(img)

    
  })

  divCard.addEventListener('click', (e) => {

    let refer = e.target.src.split('/')
    refer = '/' + refer.pop()
    let selectDato = data.results.filter((element) => {
      if (refer === element.poster_path) {
        return element.poster_path
      }
    })
    console.log(selectDato[0].id)
    printData(selectDato[0].id)
  })
}
let popUp = document.createElement("div")
popUp.remove()
function printData(id) {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${secret_key}&append_to_response=credits`,
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      
      const { title, vote_average, release_date, overview } = data
      
      popUp.append(title)
      popUp.append(vote_average)
      popUp.append(release_date)
      popUp.append(overview)
      console.log(title)
      console.log(vote_average)
      console.log(release_date)
      console.log(overview)
      
    popUp.classList="pop"
})

}
divCard.append(popUp)


trendingMovies()
