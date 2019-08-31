<template lang="html">
  <div id="film-info-container">
    <ghibli-header :title="film.title"/>
    <div id="film-info">
      <div id="film-text">
        <p>{{film.description}}</p>
        <p>{{film.director}}</p>
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
</style>
