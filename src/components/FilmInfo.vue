<template lang="html">
  <div id="film-info-container">
    <ghibli-header id="destitle" :title="film.title"/>
    <div id="film-info">
      <div id="film-text">
        <h4>Description</h4>
        <p>{{film.description}}</p>
        <span>Director: </span>
        <span>{{film.director}}</span>
        <br />
        <h3 v-on:click="addFavourite">Add to Favourites</h3>

      </div>

    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import GhibliHeader from '@/components/GhibliHeader'

export default {
  props: ['film'],
  data(){
    return {

    }
  },

  components: {
    'ghibli-header': GhibliHeader
  },
  methods: {
    addFavourite: function(film) {
      eventBus.$emit('fav-selected', this.film)
    }
  }
}
</script>


<style lang="css" scoped>

h3 {
  cursor: pointer;
}

h3:hover {
  color: gold;
}

  #film-info-container {
    width: 30%;
    background-color: white;
    opacity: 0.9;
    border: solid 3px gold;
  }

  #film-info {
    display: flex;
  }

  #film-text {
    margin-left: 1em;
  }

  ghibli-header {
    margin-left: 1em;
  }

  #destitle {
    margin-left: 0.5em;
  }

  /* h3 {
    display: flex;
    align-items: flex-end;
  } */


</style>
