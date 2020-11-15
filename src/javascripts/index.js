// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// JavaScript
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {movies} from './movies'


let featured_movie = document.querySelector('.featured')
for(let m of movies){
    let movie_thumb = document.getElementById('m' + m.id)
    movie_thumb.innerHTML = `
    <img src="${m.poster}">
    `
    movie_thumb.onclick = function(){
        selectMovie(m)
    }
}


function selectMovie(m){
    featured_movie.innerHTML= `
    <img src="${m.poster}" >
    <h3>${m.title}</h3>
    
    `
}

