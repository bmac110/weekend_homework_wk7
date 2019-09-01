<template>
  <div id="app">
    <h1>Studio Ghibli</h1>
    <ghibli-navbar id="navbar"/>
    <router-view :films="films" :favourites="favourites" id="view"/>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import GhibliNavBar from '@/components/GhibliNavBar'
import FilmInfo from '@/components/FilmInfo'

export default {
  name: 'app',
  components: {
    'ghibli-navbar': GhibliNavBar,
    'fav-film': FilmInfo

  },
  data(){
    return {
      favourites: [],
      films: []
    }
  },
  // computed: {
  //   favourites: function(){
  //     return this.films.filter(film => film.isFavourite)
  //   }
  // },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(data => this.films = data)

    eventBus.$on('fav-selected', film => this.favourites.push(film))

    // eventBus.$on('film-selected', (film) => {
    //   this.selectedFilm = film;
    // })
  }
}
</script>

<style>
h1 {
  color: white;
  font-size: 4em;
  background-color: rgba(0, 0, 0, .3)
}

a {
  display: inline-block;
  margin-right: 1em;
  color: white;
  text-decoration: none;
}

a:hover {
  color: gold;
}

#navbar {
  font-size: 2em;
  color: white;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  font-weight: bold;
}
</style>
