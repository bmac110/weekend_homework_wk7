<template lang="html">
  <div class="ghibli-view">
    <film-list :films="films"></film-list>
    <film-info v-if="selectedFilm" :film="selectedFilm"></film-info>
    <img src="../../public/ghibli_background.jpg" alt="bckgound" class="bg" />
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import FilmList from '@/components/FilmList'
import FilmInfo from '@/components/FilmInfo'

export default {
  props: ['films'],
  data(){
    return{
      selectedFilm: null
    }
  },
  components: {
    "film-list": FilmList,
    "film-info": FilmInfo
  },
  mounted(){
    eventBus.$on('film-selected', film => this.selectedFilm = film)
  }
}
</script>

<style lang="css" scoped>
.ghibli-view {
  display: flex;
  flex-wrap: wrap;
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
