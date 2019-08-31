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
#film-list {
  background-color: white;
  border: solid 3px gold;
  margin-right: 1em;
  overflow-y: scroll;
  height: 500px;
  opacity: 0.9;
}
</style>
