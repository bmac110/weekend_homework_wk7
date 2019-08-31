<template lang="html">
  <div id="film-info-container">
    <ghibli-header id="destitle" :title="film.title"/>
    <div id="film-info">
      <div id="film-text">
        <h4>Description</h4>
        <p>{{film.description}}</p>
        <span>Director: </span>
        <span>{{film.director}}</span>
        <button type="button" name="button"></button>
      </div>

    </div>
  </div>
</template>

<script>
import GhibliHeader from '@/components/GhibliHeader'

export default {
  props: ['film'],
  components: {
    'ghibli-header': GhibliHeader
  }
}
</script>

<style lang="css" scoped>
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


</style>
