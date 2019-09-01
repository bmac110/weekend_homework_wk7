<template lang="html">
  <div id="filmlistitem">
    <p v-on:click='displayInfo'>{{film.title}}</p>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'film-list-item',
  props: ['film'],
  methods: {
    displayInfo: function(){
      eventBus.$emit('film-selected', this.film)
    }
  }
}
</script>

<style lang="css" scoped>

#filmlistitem:hover {
  background-color: gold;
}


  p {
    cursor: pointer;
  }
</style>
