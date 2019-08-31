<template lang="html">
  <div id="film-list">
    <ul>
      <film-list-item  v-for="(film, index) in films" :film="film" :key="index"></film-list-item>
    </ul>
  </div>
</template>

<script>
import FilmListItem from '@/components/FilmListItem'

export default {
  name: 'film-list',
  props: ['films'],
  components: {
    'film-list-item': FilmListItem
  }
}
</script>

<style lang="css" scoped>
</style>
