<template lang="html">
  <div class="favourites-view">
    <img src="../../public/ghibli_background.jpg" alt="bckgound" class="bg" />
    <div class="favs">
      <fav-list :films="favourites"></fav-list>
      <fav-film-info v-if="selectedFilm" :film="selectedFilm"></fav-film-info>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import FilmList from '@/components/FilmList'
import FilmInfo from '@/components/FilmInfo'
import FavFilmInfo from '@/components/FavFilmInfo'

export default {
  props: ['favourites'],
  data(){
    return {
      selectedFilm: null
    }
  },
  components: {
    'fav-list': FilmList,
    'film-info': FilmInfo,
    'fav-film-info': FavFilmInfo
  },
  mounted(){
    eventBus.$on('film-selected', film => this.selectedFilm = film)
  }

}
</script>

<style lang="css" scoped>

.favs {
  font-size: 2em;
}


  img.bg {
    min-height: 100%;
    min-width: 1024px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1
}

@media screen and (max-width: 1024px){
    img.bg {
      left: 50%;
      margin-left: -512px; }
}
</style>
