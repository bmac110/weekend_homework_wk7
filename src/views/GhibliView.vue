<template lang="html">
  <div id="ghibli-view">
    <film-list :films="films"></film-list>
    <film-info v-if="selectedFilm" :film="selectedFilm"></film-info>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import FilmList from '@/components/FilmList'
import FilmInfo from '@/components/FilmInfo'

export default {
  props: ['films'],
  data(){
    
  }
  components: {
    "film-list": FilmList,
    "film-info": FilmInfo
  }
}
</script>

<style lang="css" scoped>
</style>
