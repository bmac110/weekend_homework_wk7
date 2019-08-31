<template>
  <div id="app">
    <ghibli-navbar/>
    <router-view :films="films" id="view"/>
  </div>
</template>

<script>
import GhibliNavBar from '@/components/GhibliNavBar'

export default {
  name: 'app',
  components: {
    'ghibli-navbar': GhibliNavBar
  },
  data(){
    return {
      films: []
    }
  },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(films => this.films = films)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
